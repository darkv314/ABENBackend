import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CrearEquipo {
  @Field()
  nombre: string;

  @Field()
  marca: string;

  @Field()
  modelo: string;

  @Field()
  serie: string;
}
