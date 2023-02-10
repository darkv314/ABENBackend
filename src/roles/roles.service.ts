import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RolesService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.rol.findMany();
  }

  findById(idRol: number) {
    return this.prisma.rol.findUnique({
      where: {
        id: idRol,
      },
    });
  }
}
