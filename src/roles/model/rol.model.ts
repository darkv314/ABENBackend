import { Field, Int, ObjectType } from '@nestjs/graphql';
import Usuario from 'src/usuarios/model/usuario.model';

@ObjectType()
export default class Rol {
  @Field((type) => Int)
  id: number;

  @Field({ description: 'Nombre del rol' })
  nombre: string;

  @Field((type) => [Usuario], { description: 'Usuarios de un rol' })
  usuarios: Usuario[];
}
