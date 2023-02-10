import { Field, Int, ObjectType, GraphQLTimestamp } from '@nestjs/graphql';

@ObjectType()
export default class Equipo {
  @Field((type) => Int)
  id: number;

  @Field()
  nombre: string;

  @Field()
  marca: string;

  @Field()
  modelo: string;

  @Field()
  serie: string;
}
