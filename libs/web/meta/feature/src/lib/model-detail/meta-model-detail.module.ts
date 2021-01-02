import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { UiMetaModelModule } from '@nx-prisma-admin/web/meta/ui'
import { MetaModelDetailComponent } from './meta-model-detail.component'

@NgModule({
  declarations: [MetaModelDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: MetaModelDetailComponent }]),
    UiMetaModelModule,
  ],
})
export class MetaModelDetailModule {}
