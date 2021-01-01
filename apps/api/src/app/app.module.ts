import { Module } from '@nestjs/common'
import { ApiAuthFeatureModule } from '@nx-prisma-admin/api/auth/feature'
import { ApiCoreFeatureModule } from '@nx-prisma-admin/api/core/feature'
import { ApiMetaFeatureModule } from '@nx-prisma-admin/api/meta/feature'

@Module({
  imports: [ApiAuthFeatureModule, ApiCoreFeatureModule, ApiMetaFeatureModule],
})
export class AppModule {}
