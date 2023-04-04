import { IsEmail, IsPhoneNumber, MinLength } from 'class-validator';
import {
  Field,
  InputType,
  Int,
  ObjectType,
  createUnionType,
} from '@nestjs/graphql';
import Equipo from 'src/app/equipos/model/equipo.model';
import { CrearEquipo } from 'src/app/equipos/dto/crearEquipo.dto';
import { CrearEmpleado } from 'src/app/empleados/dto/crearEmpleado.dto';
import { CrearMuestra } from 'src/app/muestras/dto/crearMuestra.dto';

@InputType()
export class generalInfo {
  @Field({ nullable: true })
  nombre: string;

  @Field()
  direccion: string;

  @Field()
  email: string;

  @Field()
  nit: string;
}

@InputType()
export class dosimetrosInfo {
  @Field()
  nombre: string;

  @Field()
  direccion: string;

  @Field()
  email: string;

  @Field()
  nit: string;

  @Field()
  actividad: string;
}

@InputType()
export class Info {
  @Field((type) => generalInfo, { nullable: true })
  generalInfo: generalInfo;

  @Field((type) => dosimetrosInfo, { nullable: true })
  dosimetriaInfo: dosimetrosInfo;
}

@InputType()
export class Item {
  @Field((type) => CrearEmpleado, { nullable: true })
  empleado: CrearEmpleado;

  @Field((type) => CrearEquipo, { nullable: true })
  equipo: CrearEquipo;

  @Field((type) => CrearMuestra, { nullable: true })
  muestra: CrearMuestra;
}

@InputType()
export class CrearServiciosInput {
  @Field()
  nombre: string;

  @Field((type) => Int)
  precio: number;

  @Field((type) => Info, { nullable: true })
  info: Info;

  @Field((type) => [Item], { nullable: true })
  items: Item[];
}
