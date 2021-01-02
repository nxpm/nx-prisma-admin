import { DMMF } from '@prisma/generator-helper'
import { DatamodelFieldMap } from './datamodel-field-map'

export interface DatamodelStructure {
  enumMap: Record<string, DMMF.Model>
  modelMap: Record<string, DMMF.Model>
  modelFieldMap: Record<string, DatamodelFieldMap>
}
