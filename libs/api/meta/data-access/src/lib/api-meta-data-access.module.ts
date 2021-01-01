import { Module } from '@nestjs/common'
import { ApiCoreDataAccessModule } from '@nx-prisma-admin/api/core/data-access'
import { ApiMetaDataAccessService } from './api-meta-data-access.service'

@Module({
  exports: [ApiMetaDataAccessService],
  imports: [ApiCoreDataAccessModule],
  providers: [ApiMetaDataAccessService],
})
export class ApiMetaDataAccessModule {}
