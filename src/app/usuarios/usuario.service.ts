import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateClientInput } from './dto/createClient.dto';

@Injectable()
export class UsuariosService {
  constructor(private prisma: PrismaService) {}

  async createClient(usuario: CreateClientInput) {
    const nuevoUsuario = await this.prisma.usuario.create({
      data: {
        ...usuario,
        rolId: 1,
      },
    });
    return nuevoUsuario;
  }

  findById(id: number) {
    return this.prisma.usuario.findUnique({
      include: {
        rol: true,
      },
      where: {
        id,
      },
    });
  }

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

  findAllUsersFromRol(rolId: number) {
    return this.prisma.usuario.findMany({
      where: {
        rolId,
      },
    });
  }

  findAll() {
    return this.prisma.usuario.findMany();
  }
}
