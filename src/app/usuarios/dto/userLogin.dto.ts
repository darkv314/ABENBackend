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
export class UsuarioLogin {
  @IsString()
  @IsNotEmpty()
  @Field()
  access_token: string;

  @IsNotEmpty()
  @IsString()
  @Field()
  nombre: string;

  @IsString()
  @IsPhoneNumber()
  @Field()
  telefono: string;

  @IsEmail()
  @IsString()
  @IsNotEmpty()
  @Field()
  email: string;

  @IsNotEmpty()
  @Field((type) => UserRol)
  rol: UserRol;
}
