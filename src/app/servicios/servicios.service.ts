import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ServiciosService {
  constructor(private prisma: PrismaService) {}

  findByUser(id: number) {
    return this.prisma.servicio.findMany({
      where: {
        usuarioId: id,
      },
    });
  }

  findAllUserServices(usuarioId: number) {
    return this.prisma.servicio.findMany({
      where: {
        usuarioId,
      },
    });
  }
}
