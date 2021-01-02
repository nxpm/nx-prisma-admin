import { Component } from '@angular/core'
import { WebMetaFeatureStore } from '../web-meta-feature.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="bg-gray-800 p-4 rounded shadow flex flex-col space-y-4">
        <div class="text-xl px-1 font-semibold">Models</div>
        <div class="grid grid-cols-4 gap-6">
          <ng-container *ngFor="let model of vm?.schema?.models">
            <div class="bg-gray-700 rounded shadow p-4">
              <div class="text-lg py-1 text-center font-semibold">
                <a [routerLink]="['/meta/models', model?.id]">{{ model?.id }}</a>
              </div>
            </div>
          </ng-container>
        </div>
        <div class="text-xl px-1 font-semibold">Enums</div>
        <div class="grid grid-cols-4 gap-6">
          <ng-container *ngFor="let enum of vm?.schema?.enums">
            <div class="bg-gray-700 rounded shadow p-4">
              <div class="text-lg py-1 text-center font-semibold">{{ enum.id }}</div>
            </div>
          </ng-container>
        </div>
      </div>
    </ng-container>
  `,
  providers: [WebMetaFeatureStore],
})
export class MetaModelListComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: WebMetaFeatureStore) {}
}
