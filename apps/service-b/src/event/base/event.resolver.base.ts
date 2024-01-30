/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Event } from "./Event";
import { EventCountArgs } from "./EventCountArgs";
import { EventFindManyArgs } from "./EventFindManyArgs";
import { EventFindUniqueArgs } from "./EventFindUniqueArgs";
import { CreateEventArgs } from "./CreateEventArgs";
import { UpdateEventArgs } from "./UpdateEventArgs";
import { DeleteEventArgs } from "./DeleteEventArgs";
import { Test } from "../../test/base/Test";
import { EventService } from "../event.service";
@graphql.Resolver(() => Event)
export class EventResolverBase {
  constructor(protected readonly service: EventService) {}

  async _eventsMeta(
    @graphql.Args() args: EventCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Event])
  async events(@graphql.Args() args: EventFindManyArgs): Promise<Event[]> {
    return this.service.events(args);
  }

  @graphql.Query(() => Event, { nullable: true })
  async event(
    @graphql.Args() args: EventFindUniqueArgs
  ): Promise<Event | null> {
    const result = await this.service.event(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Event)
  async createEvent(@graphql.Args() args: CreateEventArgs): Promise<Event> {
    return await this.service.createEvent({
      ...args,
      data: {
        ...args.data,

        test: {
          connect: args.data.test,
        },
      },
    });
  }

  @graphql.Mutation(() => Event)
  async updateEvent(
    @graphql.Args() args: UpdateEventArgs
  ): Promise<Event | null> {
    try {
      return await this.service.updateEvent({
        ...args,
        data: {
          ...args.data,

          test: {
            connect: args.data.test,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Event)
  async deleteEvent(
    @graphql.Args() args: DeleteEventArgs
  ): Promise<Event | null> {
    try {
      return await this.service.deleteEvent(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Test, {
    nullable: true,
    name: "test",
  })
  async getTest(@graphql.Parent() parent: Event): Promise<Test | null> {
    const result = await this.service.getTest(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
