import { dasherize } from '@nrwl/workspace/src/utils/strings'
import { getResolverName, getServiceName, lowerFirst, pluralize } from './index'

export function createModelResolver(name: string) {
  const fileName = dasherize(name)
  const idField = `${lowerFirst(name)}Id`

  return `import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { Create${name}Input } from './dto/create-${fileName}.input'
import { Update${name}Input } from './dto/update-${fileName}.input'
import { ${getServiceName(name)} } from './${fileName}.service'
import { ${name} } from './${fileName}.model'

@Resolver()
export class ${getResolverName(name)} {
  constructor(private readonly service: ${getServiceName(name)}) {}

  @Query(() => [${name}], { nullable: true })
  admin${pluralize(name)}() {
    return this.service.admin${pluralize(name)}()
  }

  @Query(() => ${name}, { nullable: true })
  admin${name}(@Args('${idField}') ${idField}: string) {
    return this.service.admin${name}(${idField})
  }

  @Mutation(() => ${name}, { nullable: true })
  adminCreate${name}(@Args({ name: 'input', type: () => Create${name}Input }) input: Create${name}Input) {
    return this.service.adminCreate${name}(input)
  }

  @Mutation(() => ${name}, { nullable: true })
  adminUpdate${name}(
    @Args('${idField}') ${idField}: string,
    @Args({ name: 'input', type: () => Update${name}Input }) input: Update${name}Input) {
    return this.service.adminUpdate${name}(${idField}, input)
  }

  @Mutation(() => ${name}, { nullable: true })
  adminDelete${name}(@Args('${idField}') ${idField}: string) {
    return this.service.adminDelete${name}(${idField})
  }

}`
}
