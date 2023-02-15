import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsuariosService } from './usuario.service';

@Module({
  imports: [PrismaModule],
  providers: [UsuariosService],
  exports: [UsuariosService],
})
export class UsuariosModule {}
