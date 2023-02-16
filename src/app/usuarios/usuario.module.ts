import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { EstadosModule } from '../estados/estados.module';
import { ServiciosModule } from '../servicios/servicios.module';
import { UsuariosResolver } from './usuario.resolver';
import { UsuariosService } from './usuario.service';

@Module({
  imports: [PrismaModule, ServiciosModule, EstadosModule],
  providers: [UsuariosService, UsuariosResolver],
  exports: [UsuariosService],
})
export class UsuariosModule {}
