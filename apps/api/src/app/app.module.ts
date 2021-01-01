import { ApiAuthFeatureModule } from '@nx-prisma-admin/api/auth/feature'
import { ApiCoreFeatureModule } from '@nx-prisma-admin/api/core/feature'
import { Module } from '@nestjs/common'

@Module({
  imports: [ApiAuthFeatureModule, ApiCoreFeatureModule],
})
export class AppModule {}
