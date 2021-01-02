import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { ApiMetaDataAccessService, MetaModelData, MetaSchema } from '@nx-prisma-admin/api/meta/data-access'
import GraphQLJSON from 'graphql-type-json'

@Resolver()
export class ApiMetaFeatureResolver {
  constructor(private readonly service: ApiMetaDataAccessService) {}

  @Query(() => MetaModelData, { nullable: true })
  metaModelData(@Args('model') model: string) {
    return this.service.metaModelData(model)
  }

  @Query(() => MetaSchema, { nullable: true })
  metaSchema() {
    return this.service.metaSchema()
  }

  @Query(() => GraphQLJSON, { nullable: true })
  metaGenerated() {
    return this.service.metaGenerated()
  }

  @Mutation(() => GraphQLJSON, { nullable: true })
  metaCreateModelData(
    @Args('model') model: string,
    @Args({ name: 'data', type: () => GraphQLJSON }) data: Record<string, any>,
  ) {
    return this.service.metaCreateModelData(model, data)
  }

  @Mutation(() => GraphQLJSON, { nullable: true })
  metaDeleteModelRecord(@Args('model') model: string, @Args('recordId') recordId: string) {
    return this.service.metaDeleteModelRecord(model, recordId)
  }
}
