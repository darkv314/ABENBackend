import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ServiciosService } from './servicios.service';

@Module({
  imports: [PrismaModule],
  providers: [ServiciosService],
  exports: [ServiciosService],
})
export class ServiciosModule {}
