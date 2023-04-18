import { Field, Int, ObjectType, GraphQLTimestamp } from '@nestjs/graphql';

@ObjectType()
export default class Documento {
  @Field((type) => Int)
  id: number;

  @Field()
  nombre: string;

  @Field()
  link: string;
}
