import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';

@InputType()
// @ObjectType()
export class CrearEquipo {
  @Field()
  nombre: string;

  @Field()
  fabricante: string;

  @Field()
  modelo: string;

  @Field()
  serie: string;
}
