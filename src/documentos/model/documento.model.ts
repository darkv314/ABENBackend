import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export default class Documento {
  @Field((type) => Int)
  id: number;

  @Field()
  nombre: string;

  @Field()
  link: string;
}
