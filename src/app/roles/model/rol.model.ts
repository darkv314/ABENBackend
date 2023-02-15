import { Extensions, Field, Int, ObjectType } from '@nestjs/graphql';
import Usuario from 'src/app/usuarios/model/usuario.model';
import { checkRolMiddleware } from '../middleware/checkRolMiddleware';

@ObjectType()
export default class Rol {
  @Field((type) => Int)
  id: number;

  @Field({ description: 'Nombre del rol' })
  @Extensions({ re: 'admin' })
  nombre: string;

  @Field((type) => [Usuario], { description: 'Usuarios de un rol' })
  usuarios: Usuario[];
}
