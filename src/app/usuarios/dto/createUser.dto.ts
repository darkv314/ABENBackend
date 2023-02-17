import { IsEmail, IsPhoneNumber, MinLength } from 'class-validator';
import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CrearUsuarioInput {
  @Field()
  @MinLength(4)
  nombre: string;

  @Field()
  @MinLength(6)
  password: string;

  @IsEmail()
  @Field()
  email: string;

  @Field()
  nit: string;

  @Field()
  @IsPhoneNumber()
  telefono: string;

  @Field((type) => Int)
  rolId: number;
}
