import { Injectable } from '@nestjs/common'
import { ApiCoreDataAccessService } from '@nx-prisma-admin/api/core/data-access'

@Injectable()
export class ApiMetaDataAccessService {
  constructor(private readonly data: ApiCoreDataAccessService) {}
  metaModels() {
    return []
  }
}
