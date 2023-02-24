import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { EstadosService } from './estados.service';
import { EstadosResolver } from './estados.resolver';

@Module({
  imports: [PrismaModule],
  providers: [EstadosService, EstadosResolver],
  exports: [EstadosService],
})
export class EstadosModule {}
