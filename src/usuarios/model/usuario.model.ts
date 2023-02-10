import { Field, Int, ObjectType } from '@nestjs/graphql';
import Estado from 'src/estados/model/estado.model';

@ObjectType()
export default class Usuario {
  @Field((type) => Int)
  id: number;

  @Field({ description: 'Nombre de la empresa cliente' })
  nombre: string;

  @Field({ nullable: true })
  telefono: string;

  @Field()
  email: string;

  @Field((type) => [Estado], {
    description:
      'Estados en los que esta trabajando un usuario de tipo laboratorio',
  })
  estados: Estado[];
}
