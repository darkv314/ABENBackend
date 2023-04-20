import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import Equipo, { EquipoInput } from 'src/app/equipo/model/equipo.model';

@ObjectType()
export default class Calibracion {
  @Field((type) => Int)
  id: number;

  @Field((type) => [Equipo], { nullable: true })
  equipos: Equipo[];
}

@InputType()
export class CalibracionInput {
  @Field((type) => [EquipoInput], { nullable: true })
  equipos: EquipoInput[];
}
