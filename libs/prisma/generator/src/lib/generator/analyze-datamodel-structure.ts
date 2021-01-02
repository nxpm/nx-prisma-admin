import { DMMF } from '@prisma/generator-helper'
import { DatamodelFieldMap } from './datamodel-field-map'
import { DatamodelStructure } from './datamodel-structure'
import { sortBy } from './helpers'

export function getModelFieldMap(model: DMMF.Model): DatamodelFieldMap {
  const fields = model.fields
  const enums = fields.filter((f) => f.kind === 'enum')
  const scalars = fields.filter((f) => f.kind === 'scalar')
  const relations = fields.filter((f) => f.kind === 'object')

  // Don't expose the scalar fields that store the relation
  const relationFieldIs = []
  relations.forEach((item) => {
    if (item.relationFromFields?.length) {
      relationFieldIs.push(...item.relationFromFields)
    }
  })

  return {
    model,
    enums,
    scalars: scalars.filter((scalar) => !relationFieldIs.includes(scalar.name)),
    relations,
  }
}

export function analyzeDatamodelStructure(dmmf: DMMF.Document): DatamodelStructure {
  console.log(JSON.stringify(dmmf.schema.inputObjectTypes.prisma, null, 2))
  const enums = sortBy(dmmf.datamodel.enums, 'name')
  const models = sortBy(dmmf.datamodel.models, 'name')
  const enumMap = enums.reduce((acc, curr) => ({ ...acc, [curr.name]: curr }), {})
  const modelMap = models.reduce((acc, curr) => ({ ...acc, [curr.name]: curr }), {})
  const modelFieldMap = models.reduce((acc, curr) => ({ ...acc, [curr.name]: getModelFieldMap(curr) }), {})

  return {
    enumMap,
    modelMap,
    modelFieldMap,
  }
}
