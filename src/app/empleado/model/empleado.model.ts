import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
@InputType('EmpleadoInput')
export default class Empleado {
  @Field((type) => Int)
  id: number;

  @Field()
  nombre: string;

  @Field()
  ci: string;

  @Field()
  expedido: string;

  @Field()
  cargo: string;
}
