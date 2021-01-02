import { Mutation, Query, Resolver } from '@nestjs/graphql'
import { ApiMetaDataAccessService, MetaSchema } from '@nx-prisma-admin/api/meta/data-access'

@Resolver()
export class ApiMetaFeatureResolver {
  constructor(private readonly service: ApiMetaDataAccessService) {}

  @Query(() => MetaSchema, { nullable: true })
  metaSchema() {
    return this.service.metaSchema()
  }

  // @Mutation()
  // createModel() {}
}
