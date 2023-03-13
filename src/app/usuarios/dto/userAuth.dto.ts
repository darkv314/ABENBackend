import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsPhoneNumber,
  IsString,
} from 'class-validator';
import UserRol from 'src/app/roles/dto/userRol.dto';

@ObjectType()
export class UsuarioAuth {
  @Field()
  access_token: string;

  @Field()
  nombre: string;

  @Field((type) => Int)
  id: number;

  @Field((type) => UserRol)
  rol: UserRol;

  @Field()
  email: string;

  @Field()
  nit: string;

  @Field()
  telefono: string;
}
