import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { FormlyModule } from '@ngx-formly/core'
import { UiFormFieldModule } from '../../wrappers/form-field/ui-form-field.module'
import { UiFormInputSmallComponent } from './ui-form-input-small.component'

@NgModule({
  declarations: [UiFormInputSmallComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UiFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'input-small',
          component: UiFormInputSmallComponent,
          wrappers: ['form-field-small'],
        },
        { name: 'string', extends: 'input-small' },
        {
          name: 'password',
          extends: 'input-small',
          defaultOptions: {
            templateOptions: { type: 'password' },
          },
        },
        {
          name: 'number',
          extends: 'input-small',
          defaultOptions: {
            templateOptions: {
              type: 'number',
            },
          },
        },
        {
          name: 'integer',
          extends: 'input-small',
          defaultOptions: {
            templateOptions: {
              type: 'number',
            },
          },
        },
      ],
    }),
  ],
})
export class UiFormInputSmallModule {}
