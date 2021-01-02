import { Field, ObjectType } from '@nestjs/graphql'
import { MetaEnum } from './meta-enum.model'
import { MetaModel } from './meta-model.model'

@ObjectType()
export class MetaSchema {
  @Field(() => [MetaModel], { nullable: true })
  models: MetaModel[]

  @Field(() => [MetaEnum], { nullable: true })
  enums: MetaEnum[]
}
