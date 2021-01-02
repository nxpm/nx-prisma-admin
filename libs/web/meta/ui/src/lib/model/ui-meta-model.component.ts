import { Component, Input } from '@angular/core'
import { MetaModel } from '@nx-prisma-admin/web/util/sdk'

@Component({
  selector: 'meta-model',
  template: `
    <div class="bg-gray-700 rounded shadow p-4">
      <div class="text-lg pb-3 px-1 font-semibold">
        <a [routerLink]="['/meta/models', model?.id]">{{ model?.id }}</a>
      </div>
      <div class="font-mono text-sm grid grid-cols-2">
        <ng-container *ngFor="let field of model?.fields">
          <div [ngClass]="{ 'text-yellow-300': field.enum, 'text-indigo-300': field.relation }">
            {{ field.id }}
          </div>
          <div [ngClass]="{ 'text-yellow-300': field.enum, 'text-indigo-300': field.relation }">
            {{ field.type }}{{ field.list ? '[]' : '' }}{{ field.required ? '' : '?' }}
          </div>
        </ng-container>
      </div>
    </div>
  `,
})
export class UiMetaModelComponent {
  @Input() model: MetaModel
}
