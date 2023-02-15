import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export default class Estado {
  @Field((type) => Int)
  id: number;

  @Field({
    description:
      'Nombre del estado, indica en que parte del proceso se encuentra un servicio',
  })
  nombre: string;
}
