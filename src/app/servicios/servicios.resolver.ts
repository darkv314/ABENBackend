import { UseGuards } from '@nestjs/common';
import {
  Resolver,
  Args,
  Int,
  Query,
  ResolveField,
  Parent,
  Mutation,
  Context,
} from '@nestjs/graphql';
import { Roles } from 'src/auth/decorators/rol.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolGuard } from 'src/auth/guards/rol.guard';
import { Servicio, ServicioInput } from './model/servicio.model';
import { ServiciosService } from './servicios.service';
import Estado from '../estados/model/estado.model';
import { EstadosService } from '../estados/estados.service';
// import { CrearServiciosInput } from './dto/crearServicios..dto';

@UseGuards(JwtAuthGuard, RolGuard)
@Resolver((of) => Servicio)
export class ServiciosResolver {
  constructor(
    private serviciosService: ServiciosService,
    private estadosService: EstadosService,
  ) {}

  @Roles('admin', 'cliente')
  @Query((returns) => [Servicio], { nullable: true, name: 'servicios' })
  getServicios(@Args('usuarioId', { type: () => Int }) usuarioId: number) {
    return this.serviciosService.findAllUserServices(usuarioId);
  }

  @Roles('cliente')
  @Mutation((returns) => [Servicio], { name: 'crearServicios' })
  async crearServicios(
    @Args('servicios', { type: () => [ServicioInput] })
    servicios: ServicioInput[],
  ) {
    return this.serviciosService.crearServicios(servicios);
  }

  @ResolveField((returns) => Estado)
  async estado(@Parent() servicio: Servicio) {
    const { id } = servicio;
    return this.estadosService.findByServicioId(id);
  }
}
