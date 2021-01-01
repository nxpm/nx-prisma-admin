import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { FormlyModule } from '@ngx-formly/core'
import { UiFormFieldSmallComponent } from './ui-form-field-small.component'

@NgModule({
  declarations: [UiFormFieldSmallComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild({
      wrappers: [
        {
          name: 'form-field-small',
          component: UiFormFieldSmallComponent,
        },
      ],
    }),
  ],
})
export class UiFormFieldSmallModule {}
