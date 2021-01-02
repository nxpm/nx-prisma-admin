import { Field, Int, ObjectType } from '@nestjs/graphql'
import GraphQLJSON from 'graphql-type-json'
import { MetaModel } from './meta-model.model'
import { MetaSchema } from './meta-schema.model'

@ObjectType()
export class MetaModelData {
  @Field(() => MetaModel, { nullable: true })
  model: MetaModel

  @Field(() => MetaSchema, { nullable: true })
  schema: MetaSchema

  @Field(() => [GraphQLJSON], { nullable: true })
  data: any[]

  @Field(() => Int, { nullable: true })
  count: number
}
