import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { FormlyModule } from '@ngx-formly/core'

// Types
import { UiFormCheckboxModule } from './types/checkbox/ui-form-checkbox.module'
import { UiFormInputSmallModule } from './types/input-small/ui-form-input-small.module'
import { UiFormInputModule } from './types/input/ui-form-input.module'
import { UiFormMulticheckboxModule } from './types/multicheckbox/ui-form-multicheckbox.module'
import { UiFormRadioModule } from './types/radio/src/ui-form-radio.module'
import { UiFormSelectModule } from './types/select/ui-form-select.module'
import { UiFormTextareaModule } from './types/textarea/ui-form-textarea.module'
import { UiFormTreeModule } from './types/tree/ui-form-tree.module'

import { UiFormComponent } from './ui-form.component'

// Validators
import { UiFormValidatorsModule } from './validators/ui-form-validators.module'

// Wrappers
import { UiFormAddonsModule } from './wrappers/addons/ui-form-addons.module'
import { UiFormFieldSmallModule } from './wrappers/form-field-small/ui-form-field-small.module'
import { UiFormFieldModule } from './wrappers/form-field/ui-form-field.module'

@NgModule({
  declarations: [UiFormComponent],
  exports: [UiFormComponent],
  imports: [
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    // Types
    UiFormCheckboxModule,
    UiFormInputModule,
    UiFormInputSmallModule,
    UiFormMulticheckboxModule,
    UiFormRadioModule,
    UiFormSelectModule,
    UiFormTextareaModule,
    UiFormTreeModule,
    // Validators
    UiFormValidatorsModule,
    // Wrappers
    UiFormAddonsModule,
    UiFormFieldModule,
    UiFormFieldSmallModule,
  ],
})
export class UiFormModule {}
