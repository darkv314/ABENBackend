import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';

@InputType('EstadoInput')
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
