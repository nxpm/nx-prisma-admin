import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { UiMetaModelModule } from '@nx-prisma-admin/web/meta/ui'
import { MetaModelCreateComponent } from './meta-model-create.component'

@NgModule({
  declarations: [MetaModelCreateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: MetaModelCreateComponent }]),
    UiMetaModelModule,
  ],
})
export class MetaModelCreateModule {}
