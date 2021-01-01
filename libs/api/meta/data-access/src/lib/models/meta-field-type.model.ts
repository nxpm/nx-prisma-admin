import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class MetaFieldType {
  @Field({ nullable: true })
  id: string
}
