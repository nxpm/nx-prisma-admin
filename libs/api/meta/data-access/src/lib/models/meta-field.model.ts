import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class MetaField {
  @Field({ nullable: true })
  id: string

  @Field({ nullable: true })
  type: string

  @Field({ nullable: true })
  required: boolean

  @Field({ nullable: true })
  enum: boolean

  @Field({ nullable: true })
  relation: boolean

  @Field({ nullable: true })
  list: boolean
}
