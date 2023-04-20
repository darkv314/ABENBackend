import { Field, Int, ObjectType, InputType } from '@nestjs/graphql';

@ObjectType()
export default class Equipo {
  @Field((type) => Int)
  id: number;

  @Field()
  nombre: string;

  @Field()
  fabricante: string;

  @Field()
  modelo: string;

  @Field()
  serie: string;
}

@InputType()
export class EquipoInput {
  @Field()
  nombre: string;

  @Field()
  fabricante: string;

  @Field()
  modelo: string;

  @Field()
  serie: string;
}
