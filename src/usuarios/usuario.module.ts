import { Module } from '@nestjs/common';
import { UsuariosService } from './usuario.service';

@Module({
  providers: [UsuariosService],
})
export class UsuariosModule {}
