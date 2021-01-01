import { Module } from '@nestjs/common'
import { ApiMetaDataAccessModule } from '@nx-prisma-admin/api/meta/data-access'

import { ApiMetaFeatureResolver } from './api-meta-feature.resolver'

@Module({
  imports: [ApiMetaDataAccessModule],
  providers: [ApiMetaFeatureResolver],
})
export class ApiMetaFeatureModule {}
