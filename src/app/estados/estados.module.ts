import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { EstadosService } from './estados.service';

@Module({
  imports: [PrismaModule],
  providers: [EstadosService],
  exports: [EstadosService],
})
export class EstadosModule {}
