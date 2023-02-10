import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsuariosModule } from './usuarios/usuario.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloDriver } from '@nestjs/apollo/dist/drivers';
import { join } from 'path';
import { RolesService } from './roles/roles.service';
import { RolesModule } from './roles/roles.module';
import { EstadosService } from './estados/estados.service';
import { ServiciosService } from './servicios/servicios.service';
import { DocumentosService } from './documentos/documentos.service';
import { AnalisisService } from './analisis/analisis.service';
import { EquiposService } from './equipos/equipos.service';
import { CalibracionesService } from './calibraciones/calibraciones.service';
import { EmpleadosService } from './empleados/empleados.service';
import { EstadosModule } from './estados/estados.module';
import { ServiciosModule } from './servicios/servicios.module';
import { DocumentosModule } from './documentos/documentos.module';
import { AnalisisModule } from './analisis/analisis.module';
import { EquiposModule } from './equipos/equipos.module';
import { CalibracionesModule } from './calibraciones/calibraciones.module';
import { EmpleadosModule } from './empleados/empleados.module';
import { DosimetriasModule } from './dosimetrias/dosimetrias.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      buildSchemaOptions: {
        dateScalarMode: 'timestamp',
      },
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.sql'),
    }),
    // PrismaModule,
    // UsuariosModule,
    // RolesModule,
    // EstadosModule,
    // ServiciosModule,
    // DocumentosModule,
    // AnalisisModule,
    // EquiposModule,
    // CalibracionesModule,
    // EmpleadosModule,
    // DosimetriasModule,
  ],
  // providers: [
  //   RolesService,
  //   EstadosService,
  //   ServiciosService,
  //   DocumentosService,
  //   AnalisisService,
  //   EquiposService,
  //   CalibracionesService,
  //   EmpleadosService,
  // ],
  // controllers: [AppController],
  // providers: [AppService, PrismaService],
})
export class AppModule {}
