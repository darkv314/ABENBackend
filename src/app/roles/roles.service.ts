import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ForbiddenException } from '@nestjs/common/exceptions';

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

  async createRole(rol: string) {
    try {
      const newRol = await this.prisma.rol.create({
        data: {
          nombre: rol,
        },
      });
      return newRol;
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ForbiddenException('Este rol ya existe');
      }
      throw error;
    }
  }
}
