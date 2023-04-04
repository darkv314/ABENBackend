import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';

@InputType()
// @ObjectType()
export class CrearEmpleado {
  @Field()
  nombre: string;

  @Field()
  ci: string;

  @Field()
  cargo: string;

  @Field()
  expedido: string;
}
