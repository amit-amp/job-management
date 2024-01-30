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
import { FeatureFlagValueController } from "../featureFlagValue.controller";
import { FeatureFlagValueService } from "../featureFlagValue.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  value: "exampleValue",
  environmentId: "exampleEnvironmentId",
};
const CREATE_RESULT = {
  id: "exampleId",
  value: "exampleValue",
  environmentId: "exampleEnvironmentId",
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    value: "exampleValue",
    environmentId: "exampleEnvironmentId",
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  value: "exampleValue",
  environmentId: "exampleEnvironmentId",
};

const service = {
  createFeatureFlagValue() {
    return CREATE_RESULT;
  },
  featureFlagValues: () => FIND_MANY_RESULT,
  featureFlagValue: ({ where }: { where: { id: string } }) => {
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

describe("FeatureFlagValue", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: FeatureFlagValueService,
          useValue: service,
        },
      ],
      controllers: [FeatureFlagValueController],
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

  test("POST /featureFlagValues", async () => {
    await request(app.getHttpServer())
      .post("/featureFlagValues")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /featureFlagValues", async () => {
    await request(app.getHttpServer())
      .get("/featureFlagValues")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /featureFlagValues/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/featureFlagValues"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /featureFlagValues/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/featureFlagValues"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /featureFlagValues existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/featureFlagValues")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/featureFlagValues")
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
