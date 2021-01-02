import { DatamodelFieldMap } from './datamodel-field-map'
import { DatamodelStructure } from './datamodel-structure'

export function generateModelStructure(fieldMap: DatamodelFieldMap) {
  const model = fieldMap.model
  return {
    name: model.name,
    model,
  }
}

export function generateAdminApiStructure(structure: DatamodelStructure) {
  return Object.values(structure.modelFieldMap).map((map) => generateModelStructure(map))
}
