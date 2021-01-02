import { Component, EventEmitter, Input, Output } from '@angular/core'
import { MetaModelData } from '@nx-prisma-admin/web/util/sdk'

@Component({
  selector: 'meta-model-data',
  template: `
    <div class=" w-full overflow-auto">
      <div class="p-2">{{ name }} ({{ count }})</div>
      <table class="border border-gray-700 w-full w-full overflow-x-auto">
        <tr>
          <ng-container *ngFor="let field of fields">
            <th class="p-3 border-b border-gray-700 border-l font-semibold  text-left">{{ field.id }}</th>
          </ng-container>
        </tr>
        <ng-container *ngFor="let item of items">
          <tr>
            <ng-container *ngFor="let field of fields">
              <td class="p-3 border-b border-gray-700 border-l">
                <span class=" whitespace-nowrap" *ngIf="field.id === 'id'">
                  <button (click)="editItem.emit(item)">
                    <ui-icon icon="pencil"></ui-icon>
                  </button>
                  <button (click)="deleteItem.emit(item)">
                    <ui-icon icon="trash"></ui-icon>
                  </button>
                </span>
                <span class=" whitespace-nowrap" *ngIf="field.id !== 'id'">
                  <ng-container [ngSwitch]="field?.type">
                    <ng-container *ngSwitchCase="'DateTime'">
                      {{ item[field.id] | date: 'short' }}
                    </ng-container>
                    <ng-container *ngSwitchDefault>
                      {{ item[field.id] }}
                    </ng-container>
                  </ng-container>
                </span>
              </td>
            </ng-container>
          </tr>
        </ng-container>
      </table>
    </div>
  `,
})
export class UiMetaModelDataComponent {
  @Input() modelMeta: MetaModelData
  @Output() editItem = new EventEmitter()
  @Output() deleteItem = new EventEmitter()

  get count() {
    return this.modelMeta?.count
  }

  get name() {
    return this.modelMeta?.model.id
  }

  get fields() {
    return this.modelMeta?.model?.fields?.filter((field) => !field.relation)
  }

  get items() {
    return this.modelMeta?.data
  }
}
