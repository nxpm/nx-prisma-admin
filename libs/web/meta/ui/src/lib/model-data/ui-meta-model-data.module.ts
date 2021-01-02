import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { UiIconModule } from '@nx-prisma-admin/web/ui/icon'
import { UiMetaModelDataComponent } from './ui-meta-model-data.component'

@NgModule({
  declarations: [UiMetaModelDataComponent],
  imports: [CommonModule, RouterModule, UiIconModule],
  exports: [UiMetaModelDataComponent],
})
export class UiMetaModelDataModule {}
