import { Component } from '@angular/core'
import { MetaModelDetailStore } from './meta-model-detail.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="flex flex-col space-y-5">
        <div class="bg-gray-800 p-4 rounded shadow">
          <meta-model-data
            (editItem)="editItem($event)"
            (deleteItem)="deleteItem($event)"
            [modelMeta]="vm?.modelMeta"
          ></meta-model-data>
        </div>
        <div class="bg-gray-800 p-4 rounded shadow">
          <pre>{{ vm.model | json }}</pre>
          <ui-form (submitForm)="submitForm($event)" [model]="vm.model" [fields]="vm.fields">
            <button
              type="submit"
              class="w-full flex justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              CREATE
            </button>
          </ui-form>
        </div>
      </div>
    </ng-container>
  `,
  providers: [MetaModelDetailStore],
})
export class MetaModelDetailComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: MetaModelDetailStore) {}

  submitForm($event: any) {
    this.store.submitFormEffect($event)
  }

  editItem($event: any) {
    this.store.selectModel($event)
  }

  deleteItem(record: any) {
    if (confirm('Are you sure?')) {
      this.store.deleteModelItem(record.id)
    }
  }
}
