import { Field, ObjectType } from '@nestjs/graphql'
import { MetaFieldType } from './meta-field-type.model'

@ObjectType()
export class MetaField {
  @Field({ nullable: true })
  id: string

  @Field(() => MetaFieldType, { nullable: true })
  type: MetaFieldType

  @Field({ nullable: true })
  required: boolean
}
