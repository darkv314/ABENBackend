import { Field, Int, ObjectType, GraphQLTimestamp } from '@nestjs/graphql';
import Equipo from 'src/app/equipos/model/equipo.model';

@ObjectType()
export default class Calibracion {
  @Field((type) => Int)
  id: number;

  @Field((type) => [Equipo])
  equipos: Equipo[];
}
