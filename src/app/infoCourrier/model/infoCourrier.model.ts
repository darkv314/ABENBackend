import { Field, Int, ObjectType, InputType } from '@nestjs/graphql';

@ObjectType()
@InputType('InfoCourrierInput')
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
