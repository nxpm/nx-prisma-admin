import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { UiMetaModelDataModule, UiMetaModelModule } from '@nx-prisma-admin/web/meta/ui'
import { UiFormModule } from '@nx-prisma-admin/web/ui/form'
import { MetaModelDetailComponent } from './meta-model-detail.component'

@NgModule({
  declarations: [MetaModelDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: MetaModelDetailComponent }]),
    UiMetaModelModule,
    UiMetaModelDataModule,
    UiFormModule,
  ],
})
export class MetaModelDetailModule {}
