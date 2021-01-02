export function pluralize(name: string) {
  return `${name}s`.replace('ys', 'ies')
}

export function sortByKey(key) {
  return (a, b) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0)
}

export function sortBy(arr = [], key: string) {
  return arr.concat().sort(sortByKey(key))
}

export function getResolverName(name: string) {
  return `AdminApi${name}Resolver`
}
export function getServiceName(name: string) {
  return `AdminApi${name}Service`
}
export function getModuleName() {
  return `AdminApiModule`
}

export function lowerFirst(string) {
  return string ? string.charAt(0).toLowerCase() + string.slice(1) : ''
}
