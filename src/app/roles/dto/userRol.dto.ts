import { Extensions, Field, Int, ObjectType } from '@nestjs/graphql';
import Usuario from 'src/app/usuarios/model/usuario.model';
import { checkRolMiddleware } from '../middleware/checkRolMiddleware';

@ObjectType()
export default class UserRol {
  @Field((type) => Int)
  id: number;

  @Field({ description: 'Nombre del rol' })
  @Extensions({ re: 'admin' })
  nombre: string;
}
