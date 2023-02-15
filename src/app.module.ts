import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsuariosModule } from './app/usuarios/usuario.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloDriver } from '@nestjs/apollo/dist/drivers';
import { join } from 'path';
import { RolesService } from './app/roles/roles.service';
import { RolesModule } from './app/roles/roles.module';
import { EstadosService } from './app/estados/estados.service';
import { ServiciosService } from './app/servicios/servicios.service';
import { DocumentosService } from './app/documentos/documentos.service';
import { AnalisisService } from './app/analisis/analisis.service';
import { EquiposService } from './app/equipos/equipos.service';
import { CalibracionesService } from './app/calibraciones/calibraciones.service';
import { EmpleadosService } from './app/empleados/empleados.service';
import { EstadosModule } from './app/estados/estados.module';
import { ServiciosModule } from './app/servicios/servicios.module';
import { DocumentosModule } from './app/documentos/documentos.module';
import { AnalisisModule } from './app/analisis/analisis.module';
import { EquiposModule } from './app/equipos/equipos.module';
import { CalibracionesModule } from './app/calibraciones/calibraciones.module';
import { EmpleadosModule } from './app/empleados/empleados.module';
import { DosimetriasModule } from './app/dosimetrias/dosimetrias.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      buildSchemaOptions: {
        dateScalarMode: 'timestamp',
      },
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    ConfigModule.forRoot(),
    PrismaModule,
    UsuariosModule,
    RolesModule,
    EstadosModule,
    ServiciosModule,
    DocumentosModule,
    AnalisisModule,
    EquiposModule,
    CalibracionesModule,
    EmpleadosModule,
    DosimetriasModule,
    AuthModule,
  ],
})
export class AppModule {}
