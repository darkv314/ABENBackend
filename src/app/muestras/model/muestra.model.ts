import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export default class Muestra {
  @Field((type) => Int)
  id: number;

  @Field()
  tipo: string;

  @Field()
  procedencia: string;

  @Field()
  identificacion: string;

  @Field({ nullable: true })
  coordenadas: string;
}
