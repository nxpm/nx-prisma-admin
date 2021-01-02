import { parse } from 'prismafile'
import { Enum, Model, Schema } from 'prismafile/dist/ast'

export function parseSchema(schema: string): Schema {
  return parse(schema)
}

export function getEnums(schema: Schema) {
  return schema.blocks.filter((block) => block.type === 'enum') as Enum[]
}

export function getModels(schema: Schema) {
  return schema.blocks.filter((block) => block.type === 'model') as Model[]
}
