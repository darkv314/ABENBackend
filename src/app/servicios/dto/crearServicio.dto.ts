import { IsEmail, IsPhoneNumber, MinLength } from 'class-validator';
import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';

@InputType()
export class CrearServicioInput {
  @Field()
  direccion: string;

  @Field((type) => Int)
  cantidad: number;

  @Field((type) => Int)
  usuarioId: number;
}

@ObjectType()
export class Response {
  @Field()
  message: string;
}
