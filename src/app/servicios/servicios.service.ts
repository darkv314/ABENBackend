import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ServicioInput } from './model/servicio.model';
// import { CrearServicioInput } from './dto/crearServicio.dto';

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

  async crearServicios(servicios: ServicioInput[]) {
    // console.log(servicios);
    return this.prisma.$transaction(
      servicios.map((servicio) => {
        const serv = {};
        if (servicio.nombre === 'Calibración') {
          serv['calibracion'] = {
            create: {
              equipos: {
                createMany: { data: servicio.calibracion.equipos },
              },
            },
          };
        } else if (servicio.nombre === 'Análisis de muestras') {
          serv['analisis'] = {
            create: {
              muestras: {
                createMany: { data: servicio.analisis.muestras },
              },
            },
          };
        } else {
          serv['dosimetria'] = {
            create: {
              actividad: servicio.dosimetria.actividad,
              infoCourrier: {
                create: servicio.dosimetria.infoCourrier,
              },
              lecturas: servicio.dosimetria.lecturas,
              empleados: {
                createMany: { data: servicio.dosimetria.empleados },
              },
            },
          };
        }
        return this.prisma.servicio.create({
          data: {
            nombre: servicio.nombre,
            cantidad: servicio.cantidad,
            usuarioId: servicio.usuarioId,
            email: servicio.email,
            empresa: servicio.empresa,
            nit: servicio.nit,
            telefono: servicio.telefono,
            ...serv,
            estado: {
              create: {
                nombre: 'Contrato Generado',
              },
            },
          },
          include: {
            analisis: true,
            estado: true,
          },
        });
      }),
    );
  }
}
