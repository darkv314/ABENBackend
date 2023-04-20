import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ServiciosService } from './servicios.service';
import { ServiciosResolver } from './servicios.resolver';
import { EstadosService } from '../estados/estados.service';

@Module({
  imports: [PrismaModule],
  providers: [ServiciosService, ServiciosResolver, EstadosService],
  exports: [ServiciosService],
})
export class ServiciosModule {}
