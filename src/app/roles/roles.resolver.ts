import { UseGuards } from '@nestjs/common';
import {
  Resolver,
  Args,
  Int,
  Query,
  ResolveField,
  Parent,
  Mutation,
} from '@nestjs/graphql';
import Usuario from 'src/app/usuarios/model/usuario.model';
import { UsuariosService } from 'src/app/usuarios/usuario.service';
import { Roles } from 'src/auth/decorators/rol.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolGuard } from 'src/auth/guards/rol.guard';
import Rol from './model/rol.model';

import { RolesService } from './roles.service';

@UseGuards(JwtAuthGuard, RolGuard)
@Resolver((of) => Rol)
export class RolesResolver {
  constructor(
    private rolesService: RolesService,
    private usuariosService: UsuariosService,
  ) {}

  @Roles('admin')
  @Query((returns) => Rol, { nullable: true, name: 'rol' })
  async getRol(@Args('id', { type: () => Int }) id: number) {
    return this.rolesService.findById(id);
  }

  @Roles('admin')
  @Query((returns) => [Rol], { nullable: true, name: 'roles' })
  async getAllRoles() {
    return this.rolesService.findAll();
  }

  @Roles('admin')
  @Mutation((returns) => Rol, { name: 'rol' })
  async createRol(@Args('nombre') nombre: string) {
    return this.rolesService.createRole({ nombre });
  }

  @ResolveField((returns) => Usuario)
  async usuarios(@Parent() rol: Rol) {
    const { id } = rol;
    return this.usuariosService.findAllUsersFromRol(id);
  }
}
