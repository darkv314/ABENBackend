import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import Empleado, { EmpleadoInput } from 'src/app/empleado/model/empleado.model';
import InfoCourrier, {
  InfoCourrierInput,
} from 'src/app/infoCourrier/model/infoCourrier.model';

@ObjectType()
export default class Dosimetria {
  @Field((type) => Int)
  id: number;

  @Field()
  actividad: string;

  @Field((type) => Int)
  lecturas: number;

  @Field((type) => InfoCourrier, { nullable: true })
  infoCourrier?: InfoCourrier;

  @Field((type) => [Empleado], { nullable: true })
  empleados: Empleado[];
}

@InputType('DosimetriaInput')
export class DosimetriaInput {
  @Field()
  actividad: string;

  @Field((type) => InfoCourrierInput, { nullable: true })
  infoCourrier?: InfoCourrierInput;

  @Field((type) => Int)
  lecturas: number;

  @Field((type) => [EmpleadoInput], { nullable: true })
  empleados: EmpleadoInput[];
}
