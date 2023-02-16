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
export class Usuario {
  @Field((type) => Int)
  id: number;

  @Field()
  nombre: string;

  @IsPhoneNumber()
  @Field()
  telefono: string;

  @IsEmail()
  @Field()
  email: string;

  @Field((type) => UserRol)
  rol: UserRol;
}
