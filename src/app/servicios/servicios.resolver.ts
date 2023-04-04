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
import { CrearEmpleado } from '../empleados/dto/crearEmpleado.dto';
import { CrearEquipo } from '../equipos/dto/crearEquipo.dto';
import Equipo from '../equipos/model/equipo.model';
import { CrearMuestra } from '../muestras/dto/crearMuestra.dto';
import { CrearServicioInput, Response } from './dto/crearServicio.dto';
import Servicio from './model/servicio.model';
import { ServiciosService } from './servicios.service';
import { CrearServiciosInput } from './dto/crearServicios..dto';
// import { CrearServiciosInput } from './dto/crearServicios..dto';

@UseGuards(JwtAuthGuard, RolGuard)
@Resolver((of) => Servicio)
export class ServiciosResolver {
  constructor(private serviciosService: ServiciosService) {}

  @Roles('admin', 'cliente')
  @Query((returns) => [Servicio], { nullable: true, name: 'servicios' })
  getServicios(@Args('usuarioId', { type: () => Int }) usuarioId: number) {
    return this.serviciosService.findAllUserServices(usuarioId);
  }

  @Roles('admin', 'cliente')
  @Mutation((returns) => Servicio, { name: 'servicioCalibracion' })
  async crearServicioCalibracion(
    @Args('equipos', { type: () => [CrearEquipo] }) equipos: CrearEquipo[],
    @Context() context,
  ) {
    console.log(context.req.user);
    return this.serviciosService.crearCalibracion(equipos, context.req.user);
  }

  @Roles('admin', 'cliente')
  @Mutation((returns) => Servicio, { name: 'servicioAnalisis' })
  async crearServicioAnalisis(
    @Args('muestras', { type: () => [CrearMuestra] }) muestras: CrearMuestra[],
    @Context() context,
  ) {
    console.log(context.req.user);
    return this.serviciosService.crearAnalisis(muestras, context.req.user);
  }

  @Roles('admin', 'cliente')
  @Mutation((returns) => Response, { name: 'crearServicios' })
  async crearServicios(
    @Args('servicios', { type: () => CrearServiciosInput })
    servicios: CrearServiciosInput,
  ) {
    return this.serviciosService.crearServicios(servicios);
  }

  // @ResolveField((returns) => [CrearEmpleado], { nullable: true })
  // async empleados(@Parent() servicio: Servicio) {
  //   const { id } = servicio;
  //   return this.serviciosService.findAllEmployeesFromService(id);
  // }
}
