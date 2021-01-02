import { Injectable } from '@nestjs/common'
import { ApiCoreDataAccessService } from '@nx-prisma-admin/api/core/data-access'
import { readFileSync, readJsonSync } from 'fs-extra'
import { join } from 'path'
import { getEnums, getModels, parseSchema } from './schema/schema-utils'

@Injectable()
export class ApiMetaDataAccessService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  metaSchema() {
    const schema = ApiMetaDataAccessService.getProjectSchema()
    const parsed = parseSchema(schema)

    const enums = getEnums(parsed)
    const enumNames = enums.map((item) => item?.name?.name)
    const models = getModels(parsed)
    const modelNames = models.map((model) => model?.name?.name)

    return {
      enums: enums.map((item) => ({
        id: item?.name?.name,
        values: item?.enumerators?.map((i) => i?.name?.name),
      })),
      models: models.map((model) => ({
        id: model?.name?.name,
        fields: model?.properties?.map((p: any) => {
          const id = p?.name?.name
          const dataType = p?.datatype?.type
          const optional = dataType === 'optional_type'
          const typeName = p?.datatype?.name?.name
          const innerTypeName = p?.datatype?.inner?.name?.name
          const type = typeName || innerTypeName

          return {
            id,
            type,
            required: optional === false,
            enum: enumNames.includes(type),
            relation: modelNames.includes(type),
            list: dataType === 'list_type',
          }
        }),
      })),
    }
  }

  private static getProjectSchema() {
    const prismaFile = this.getProjectSchemaFile()

    return readFileSync(join(process.cwd(), prismaFile), { encoding: 'utf8' })
  }

  private static getProjectSchemaFile() {
    const packageJson = readJsonSync(join(process.cwd(), 'package.json'))

    return packageJson?.prisma?.schema
  }
}
