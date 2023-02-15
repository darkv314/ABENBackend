import { Module } from '@nestjs/common';
import { DosimetriasService } from './dosimetrias.service';

@Module({
  providers: [DosimetriasService]
})
export class DosimetriasModule {}
