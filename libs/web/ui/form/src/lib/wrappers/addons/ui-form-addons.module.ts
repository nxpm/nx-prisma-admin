import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { UiIconModule } from '@nx-prisma-admin/web/ui/icon'
import { FormlyModule } from '@ngx-formly/core'

import { UiFormAddonsComponent } from './ui-form-addons.component'
import { addonsExtension } from './ui-form-addons.extension'

@NgModule({
  declarations: [UiFormAddonsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild({
      wrappers: [{ name: 'addons', component: UiFormAddonsComponent }],
      extensions: [{ name: 'addons', extension: { postPopulate: addonsExtension } }],
    }),
    UiIconModule,
  ],
})
export class UiFormAddonsModule {}
