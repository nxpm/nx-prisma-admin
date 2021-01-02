import { LoadChildren, Route } from '@angular/router'

export function route(r: Route): Route {
  return { path: '', ...r }
}

export function routeRedirect(path: string): Route {
  return route({ pathMatch: 'full', redirectTo: path })
}

export function routeLazy(path: string, loadChildren: LoadChildren): Route {
  return route({ path, loadChildren })
}

export function routeChildren(component: any, children: Route[]): Route {
  return route({ component, children })
}

export function routeGroup(path: string, children: Route[]): Route {
  return route({ path, children })
}
