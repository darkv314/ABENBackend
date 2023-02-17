import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CrearClienteInput } from './dto/crearCliente.dto';
import { CrearUsuarioInput } from './dto/createUser.dto';

@Injectable()
export class UsuariosService {
  constructor(private prisma: PrismaService) {}

  async createUser(usuario: CrearUsuarioInput) {
    try {
      const nuevoUsuario = await this.prisma.usuario.create({
        data: {
          ...usuario,
        },
        include: {
          rol: true,
        },
      });
      return nuevoUsuario;
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ForbiddenException(
          `El ${error.meta.target[0]} ya está registrado en otra cuenta`,
        );
      }
    }
  }

  async crearCliente(usuario: CrearClienteInput) {
    try {
      const nuevoUsuario = await this.prisma.usuario.create({
        data: {
          ...usuario,
          rolId: 1,
        },
        include: {
          rol: true,
        },
      });
      return nuevoUsuario;
    } catch (error) {
      // console.log(error, 'error');
      if (error.code === 'P2002') {
        throw new ForbiddenException(
          `El ${error.meta.target[0]} ya está registrado en otra cuenta`,
        );
      }
    }
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
