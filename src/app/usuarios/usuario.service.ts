import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsuariosService {
  constructor(private prisma: PrismaService) {}

  findByEmail(email: string) {
    return this.prisma.usuario.findUnique({
      include: {
        rol: true,
      },
      where: {
        email,
      },
    });
  }

  findAll(rolId: number) {
    return this.prisma.usuario.findMany({
      where: {
        rolId,
      },
    });
  }
}
