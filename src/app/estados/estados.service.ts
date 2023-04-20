import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EstadosService {
  constructor(private prisma: PrismaService) {}

  findAllUserEstados(empleadoId: number) {
    return this.prisma.estado.findMany({
      where: {
        empleadoId,
      },
    });
  }

  findByServicioId(id: number) {
    return this.prisma.estado.findUnique({
      where: {
        servicioId: id,
      },
    });
  }
}
