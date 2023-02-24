import { Module } from '@nestjs/common';
import { MuestrasService } from './muestras.service';
import { MuestrasResolver } from './muestras.resolver';

@Module({
  providers: [MuestrasService, MuestrasResolver]
})
export class MuestrasModule {}
