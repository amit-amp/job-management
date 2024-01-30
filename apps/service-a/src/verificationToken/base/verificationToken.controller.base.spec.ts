import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { VerificationTokenController } from "../verificationToken.controller";
import { VerificationTokenService } from "../verificationToken.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  identifier: "exampleIdentifier",
  id: "exampleId",
  expires: new Date(),
};
const CREATE_RESULT = {
  identifier: "exampleIdentifier",
  id: "exampleId",
  expires: new Date(),
};
const FIND_MANY_RESULT = [
  {
    identifier: "exampleIdentifier",
    id: "exampleId",
    expires: new Date(),
  },
];
const FIND_ONE_RESULT = {
  identifier: "exampleIdentifier",
  id: "exampleId",
  expires: new Date(),
};

const service = {
  createVerificationToken() {
    return CREATE_RESULT;
  },
  verificationTokens: () => FIND_MANY_RESULT,
  verificationToken: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("VerificationToken", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: VerificationTokenService,
          useValue: service,
        },
      ],
      controllers: [VerificationTokenController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /verificationTokens", async () => {
    await request(app.getHttpServer())
      .post("/verificationTokens")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        expires: CREATE_RESULT.expires.toISOString(),
      });
  });

  test("GET /verificationTokens", async () => {
    await request(app.getHttpServer())
      .get("/verificationTokens")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          expires: FIND_MANY_RESULT[0].expires.toISOString(),
        },
      ]);
  });

  test("GET /verificationTokens/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/verificationTokens"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /verificationTokens/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/verificationTokens"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        expires: FIND_ONE_RESULT.expires.toISOString(),
      });
  });

  test("POST /verificationTokens existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/verificationTokens")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        expires: CREATE_RESULT.expires.toISOString(),
      })
      .then(function () {
        agent
          .post("/verificationTokens")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
