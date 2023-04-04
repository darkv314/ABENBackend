import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';

@InputType()
// @ObjectType()
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
