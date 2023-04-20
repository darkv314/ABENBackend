import { Field, Int, ObjectType, InputType } from '@nestjs/graphql';

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

@InputType()
export class InfoCourrierInput {
  @Field()
  responsable: string;

  @Field()
  telefono: string;

  @Field()
  direccion: string;
}
