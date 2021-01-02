import { DMMF } from '@prisma/generator-helper'

export function createModelEnum(field: DMMF.Field, optional = true): string {
  return [
    `  @Field(() => ${field.type}, ${optional ? '{ nullable: true }' : ''})`,
    `  ${field.name}${optional ? '?' : ''}: ${field.type}`,
  ].join('\n')
}
