import { UseGuards } from '@nestjs/common';
import { Resolver } from '@nestjs/graphql';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolGuard } from 'src/auth/guards/rol.guard';
import { EstadosService } from './estados.service';
import Estado from './model/estado.model';

@UseGuards(JwtAuthGuard, RolGuard)
@Resolver((of) => Estado)
export class EstadosResolver {
  constructor(private estadosService: EstadosService) {}
}
