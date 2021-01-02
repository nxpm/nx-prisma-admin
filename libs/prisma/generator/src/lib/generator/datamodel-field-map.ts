import { DMMF } from '@prisma/generator-helper'

export interface DatamodelFieldMap {
  model: DMMF.Model
  enums: DMMF.Field[]
  scalars: DMMF.Field[]
  relations: DMMF.Field[]
}
