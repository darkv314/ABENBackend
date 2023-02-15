import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { RolesService } from './roles.service';
import { RolesResolver } from './roles.resolver';
import { UsuariosModule } from 'src/app/usuarios/usuario.module';

@Module({
  imports: [PrismaModule, UsuariosModule],
  providers: [RolesService, RolesResolver],
  exports: [RolesService],
})
export class RolesModule {}
