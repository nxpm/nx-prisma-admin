import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { UiMetaModelComponent } from './ui-meta-model.component'

@NgModule({
  declarations: [UiMetaModelComponent],
  imports: [CommonModule, RouterModule],
  exports: [UiMetaModelComponent],
})
export class UiMetaModelModule {}
