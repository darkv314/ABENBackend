import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import Empleado from 'src/app/empleado/model/empleado.model';
import InfoCourrier from 'src/app/infoCourrier/model/infoCourrier.model';

@ObjectType()
@InputType('DosimetriaInput')
export default class Dosimetria {
  @Field((type) => Int)
  id: number;

  @Field()
  actividad: string;

  @Field((type) => InfoCourrier, { nullable: true })
  infoCourrier?: InfoCourrier;

  @Field((type) => [Empleado], { nullable: true })
  empleados: Empleado[];
}
