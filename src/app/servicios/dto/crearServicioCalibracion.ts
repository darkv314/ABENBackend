import { IsEmail, IsPhoneNumber, MinLength } from 'class-validator';
import { Field, InputType, Int } from '@nestjs/graphql';
import Equipo from 'src/app/equipos/model/equipo.model';

@InputType()
export class CrearServicioCalibracion {
  @Field((type) => [Equipo])
  equipos: Equipo[];
}
