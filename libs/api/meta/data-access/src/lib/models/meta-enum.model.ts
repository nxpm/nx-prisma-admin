import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class MetaEnum {
  @Field({ nullable: true })
  id: string

  @Field(() => [String], { nullable: true })
  values: string[]
}
