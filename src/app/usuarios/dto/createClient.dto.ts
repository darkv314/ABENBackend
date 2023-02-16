import { IsEmail, IsPhoneNumber, MinLength } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateClientInput {
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
}
