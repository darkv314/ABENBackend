import { Field, Int, ObjectType } from '@nestjs/graphql';
import Empleado from 'src/app/empleados/model/empleado.model';

@ObjectType()
export default class Dosimetria {
  @Field((type) => Int)
  id: number;

  @Field((type) => [Empleado])
  empleados: Empleado[];
}
