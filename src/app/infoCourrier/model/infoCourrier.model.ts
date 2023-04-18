import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export default class InfoCourrier {
  @Field((type) => Int)
  id: number;

  @Field()
  responsable: string;

  @Field()
  telefono: string;

  @Field()
  direccion: string;
}
