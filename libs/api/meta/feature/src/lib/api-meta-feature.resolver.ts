import { Query, Resolver } from '@nestjs/graphql'
import { ApiMetaDataAccessService, MetaModel } from '@nx-prisma-admin/api/meta/data-access'

@Resolver()
export class ApiMetaFeatureResolver {
  constructor(private readonly service: ApiMetaDataAccessService) {}

  @Query(() => [MetaModel], { nullable: true })
  metaModels() {
    return this.service.metaModels()
  }
}
