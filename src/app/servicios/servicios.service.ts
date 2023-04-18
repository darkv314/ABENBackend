import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CrearEmpleado } from '../empleados/dto/crearEmpleado.dto';
import { CrearEquipo } from '../equipos/dto/crearEquipo.dto';
import { CrearMuestra } from '../muestras/dto/crearMuestra.dto';
import { CrearServicioInput } from './dto/crearServicio.dto';

@Injectable()
export class ServiciosService {
  constructor(private prisma: PrismaService) {}

  findAllUserServices(usuarioId: number) {
    return this.prisma.servicio.findMany({
      where: {
        usuarioId,
      },
    });
  }

  async crearCalibracion(equipos: CrearEquipo[], usuario) {
    return this.prisma.servicio.create({
      data: {
        nombre: 'Calibracion',
        usuarioId: usuario.id,
        cantidad: equipos.length,
        calibracion: {
          create: {
            equipos: {
              create: equipos,
            },
          },
        },
      },
    });
  }

  async crearAnalisis(muestras: CrearMuestra[], usuario) {
    return this.prisma.servicio.create({
      data: {
        nombre: 'Analisis',
        usuarioId: usuario.id,
        cantidad: muestras.length,
        analisis: {
          create: {
            muestras: {
              create: muestras,
            },
          },
        },
      },
    });
  }

  async crearDosimetria(empleados: CrearEmpleado[], usuario) {
    return this.prisma.servicio.create({
      data: {
        nombre: 'Dosimetria',
        usuarioId: usuario.id,
        cantidad: empleados.length,
        dosimetria: {
          create: {
            actividad: 'Dosimetria',
            courrier: true,
            empleados: {
              create: empleados,
            },
          },
        },
      },
      include: {
        dosimetria: true,
      },
    });
  }

  async crearServicios(servicios) {
    console.log(servicios);
    return this.prisma.servicio.createMany({
      data: servicios,
    });
  }
}
