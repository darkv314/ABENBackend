import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UsuarioInputLogin {
  @IsEmail()
  @Field()
  email: string;

  @Field()
  password: string;
}
