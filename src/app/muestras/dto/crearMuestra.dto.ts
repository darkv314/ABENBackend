import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CrearMuestra {
  @Field((type) => Int)
  cantidad: number;

  @Field()
  pais: string;

  @Field()
  empresa: string;

  @Field()
  almacenado: string;

  @Field()
  material: string;
}
