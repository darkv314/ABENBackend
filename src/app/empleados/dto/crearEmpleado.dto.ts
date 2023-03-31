import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
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
