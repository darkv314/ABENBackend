import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ServiciosService } from './servicios.service';
import { ServiciosResolver } from './servicios.resolver';

@Module({
  imports: [PrismaModule],
  providers: [ServiciosService, ServiciosResolver],
  exports: [ServiciosService],
})
export class ServiciosModule {}
