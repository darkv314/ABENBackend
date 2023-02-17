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
import { UsuariosService } from './usuario.service';
import { Roles } from 'src/auth/decorators/rol.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolGuard } from 'src/auth/guards/rol.guard';
import Usuario from './model/usuario.model';
import Servicio from '../servicios/model/servicio.model';
import { ServiciosService } from '../servicios/servicios.service';
import Estado from '../estados/model/estado.model';
import { EstadosService } from '../estados/estados.service';

@UseGuards(JwtAuthGuard, RolGuard)
@Resolver((of) => Usuario)
export class UsuariosResolver {
  constructor(
    private usuariosService: UsuariosService,
    private serviciosService: ServiciosService,
    private estadosService: EstadosService,
  ) {}

  // @Roles('admin')
  @Query((returns) => Usuario, { nullable: true, name: 'usuario' })
  getUsuarioById(@Args('id', { type: () => Int }) id: number) {
    return this.usuariosService.findById(id);
  }

  @Roles('admin')
  @Query((returns) => [Usuario], { nullable: true, name: 'usuarios' })
  getUsuarios() {
    return this.usuariosService.findAll();
  }

  @ResolveField((returns) => Servicio)
  async servicios(@Parent() usuario: Usuario) {
    const { id } = usuario;
    return this.serviciosService.findAllUserServices(id);
  }

  @ResolveField((returns) => Estado)
  async estados(@Parent() usuario: Usuario) {
    const { id } = usuario;
    return this.estadosService.findAllUserEstados(id);
  }
}
