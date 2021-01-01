import { CdkTreeModule } from '@angular/cdk/tree'
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { UiIconModule } from '@nx-prisma-admin/web/ui/icon'
import { FormlyModule } from '@ngx-formly/core'
import { UiFormFieldModule } from '../../wrappers/form-field/ui-form-field.module'
import { UiFormTreeComponent } from './ui-form-tree.component'

@NgModule({
  declarations: [UiFormTreeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UiFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'tree',
          component: UiFormTreeComponent,
        },
      ],
    }),
    CdkTreeModule,
    UiIconModule,
  ],
})
export class UiFormTreeModule {}
