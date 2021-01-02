import { dasherize } from '@nrwl/workspace/src/utils/strings'
import { DMMF } from '@prisma/generator-helper'
import { getServiceName, lowerFirst, pluralize } from './index'

export function createModelService(model: DMMF.Model) {
  const name = model.name
  const fileName = dasherize(name)
  const idField = `${lowerFirst(name)}Id`

  return `import { Injectable } from '@nestjs/common'
import { ApiDataAccessCoreService } from '../../../lib/api-data-access-core.service'
import { Create${name}Input } from './dto/create-${fileName}.input'
import { Update${name}Input } from './dto/update-${fileName}.input'

@Injectable()
export class ${getServiceName(name)}{
  constructor(private readonly data: ApiDataAccessCoreService) {}

  admin${pluralize(name)}() {
    return this.data.${lowerFirst(name)}.findMany()
  }

  admin${name}(${idField}: string) {
    return this.data.${lowerFirst(name)}.findOne({ where: { id: ${idField} }})
  }

  adminCreate${name}(input: Create${name}Input) {
    return this.data.${lowerFirst(name)}.create({
      data: { ...input },
    })
  }

  adminUpdate${name}(${idField}: string, input: Update${name}Input) {
    return this.data.${lowerFirst(name)}.update({
      where: { id: ${idField} },
      data: { ...input },
    })
  }

  adminDelete${name}(${idField}: string) {
    return this.data.${lowerFirst(name)}.delete({ where: { id: ${idField} }})
  }
}
`
}
