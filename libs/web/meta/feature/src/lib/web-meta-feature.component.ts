import { Component } from '@angular/core'
import { WebMetaFeatureStore } from './web-meta-feature.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="container mx-auto my-6 my-md-12 flex flex-col space-y-6">
        <div class="grid grid-cols-4 gap-6">
          <div class="bg-gray-800 p-4 rounded shadow flex flex-col space-y-6">
            <div>
              <div class="text-xl pb-3 px-1 font-semibold">Models</div>
              <div class="flex flex-col space-y-2">
                <ng-container *ngFor="let item of vm?.schema?.models">
                  <div class="rounded-md overflow-hidden text-sm bg-gray-700">
                    <a class="block px-2 py-1" routerLinkActive="bg-gray-900" [routerLink]="['models', item.id]">{{
                      item.id
                    }}</a>
                  </div>
                </ng-container>
              </div>
            </div>
            <div>
              <div class="text-xl pb-3 px-1 font-semibold">Enums</div>
              <div class="flex flex-col space-y-2">
                <ng-container *ngFor="let item of vm?.schema?.enums">
                  <div class="rounded-md overflow-hidden text-sm border border-gray-700 px-2 py-1">
                    {{ item.id }}
                  </div>
                </ng-container>
              </div>
            </div>
          </div>
          <div class="col-span-3">
            <router-outlet></router-outlet>
          </div>
        </div>
      </div>
    </ng-container>
  `,
  providers: [WebMetaFeatureStore],
})
export class WebMetaFeatureComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: WebMetaFeatureStore) {}
}
