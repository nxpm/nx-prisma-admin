import { Field, ObjectType } from '@nestjs/graphql'
import { MetaField } from './meta-field.model'

@ObjectType()
export class MetaModel {
  @Field({ nullable: true })
  id: string

  @Field(() => [MetaField], { nullable: true })
  fields: MetaField[]
}
