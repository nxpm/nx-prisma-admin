import { Injectable, NotFoundException } from '@nestjs/common'
import { camelize } from '@nrwl/workspace/src/utils/strings'
import { ApiCoreDataAccessService, nxPrismaStructure } from '@nx-prisma-admin/api/core/data-access'
import { readFileSync, readJsonSync } from 'fs-extra'
import { join } from 'path'
import { getEnums, getModels, parseSchema } from './schema/schema-utils'

@Injectable()
export class ApiMetaDataAccessService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  metaGenerated() {
    return nxPrismaStructure
  }

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

  async metaDeleteModelRecord(modelName: string, recordId: string) {
    this.getModel(modelName)
    return this.getPrisma(modelName).delete({ where: { id: recordId } })
  }

  async metaModelData(modelName: string) {
    const schema = this.metaSchema()
    const model = this.getModel(modelName)

    const [data, count] = await Promise.all([this.getPrisma(modelName).findMany(), this.getPrisma(modelName).count()])

    return {
      model,
      data,
      count,
      schema,
    }
  }

  metaCreateModelData(model: string, data: Record<string, any>) {
    const schema = this.metaSchema()
    const modelData = schema.models.find((m) => m.id === model)

    const input = modelData.fields.reduce((acc, curr) => {
      const fieldId = curr.id

      if (fieldId.endsWith('Id')) {
        const relationType = fieldId.replace('Id', '')
        return {
          ...acc,
          [relationType]: { connect: { id: data[fieldId] } },
        }
      }
      if (curr.type === 'Int') {
        return {
          ...acc,
          [fieldId]: parseInt(data[fieldId]),
        }
      }

      return {
        ...acc,
        [fieldId]: data[fieldId],
      }
    }, {})

    if (data.id) {
      return this.data[camelize(model)].update({
        where: { id: data.id },
        data: { ...input },
      })
    }
    return this.data[camelize(model)].create({
      data: { ...input },
    })
  }

  getModel(modelName: string) {
    const schema = this.metaSchema()
    const model = schema.models.find((m) => m.id === modelName)

    if (!model) {
      throw new NotFoundException(`Model ${modelName} not found!`)
    }

    if (!this.data[camelize(modelName)]) {
      throw new NotFoundException(`Type ${camelize(modelName)} not found in Prisma!`)
    }
    return model
  }

  getPrisma(modelName: string) {
    return this.data[camelize(modelName)]
  }
}
