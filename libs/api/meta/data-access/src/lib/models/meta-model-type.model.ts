import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class MetaModelType {
  @Field({ nullable: true })
  id: string
}
