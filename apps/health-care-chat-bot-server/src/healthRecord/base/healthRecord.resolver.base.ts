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
import { HealthRecord } from "./HealthRecord";
import { HealthRecordCountArgs } from "./HealthRecordCountArgs";
import { HealthRecordFindManyArgs } from "./HealthRecordFindManyArgs";
import { HealthRecordFindUniqueArgs } from "./HealthRecordFindUniqueArgs";
import { DeleteHealthRecordArgs } from "./DeleteHealthRecordArgs";
import { HealthRecordService } from "../healthRecord.service";
@graphql.Resolver(() => HealthRecord)
export class HealthRecordResolverBase {
  constructor(protected readonly service: HealthRecordService) {}

  async _healthRecordsMeta(
    @graphql.Args() args: HealthRecordCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [HealthRecord])
  async healthRecords(
    @graphql.Args() args: HealthRecordFindManyArgs
  ): Promise<HealthRecord[]> {
    return this.service.healthRecords(args);
  }

  @graphql.Query(() => HealthRecord, { nullable: true })
  async healthRecord(
    @graphql.Args() args: HealthRecordFindUniqueArgs
  ): Promise<HealthRecord | null> {
    const result = await this.service.healthRecord(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => HealthRecord)
  async deleteHealthRecord(
    @graphql.Args() args: DeleteHealthRecordArgs
  ): Promise<HealthRecord | null> {
    try {
      return await this.service.deleteHealthRecord(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}