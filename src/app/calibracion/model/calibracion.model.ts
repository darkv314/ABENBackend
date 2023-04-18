import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import Equipo from 'src/app/equipo/model/equipo.model';

@ObjectType()
@InputType('CalibracionInput')
export default class Calibracion {
  @Field((type) => Int)
  id: number;

  @Field((type) => [Equipo], { nullable: true })
  equipos: Equipo[];
}
