import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export default class Empleado {
  @Field((type) => Int)
  id: number;

  @Field()
  nombre: string;

  @Field({ description: 'Link al documento pdf del CI' })
  ci: string;

  @Field({ description: 'Cargo en la empresa del empleado' })
  cargo: string;
}
