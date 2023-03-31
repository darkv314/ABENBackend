import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UsuariosModule } from './app/usuarios/usuario.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloDriver } from '@nestjs/apollo/dist/drivers';
import { join } from 'path';
import { RolesModule } from './app/roles/roles.module';
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
import { TestModule } from './app/test/test.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      buildSchemaOptions: {
        dateScalarMode: 'timestamp',
      },
      // playground: false,
      driver: ApolloDriver,
      subscriptions: {
        'graphql-ws': true,
      },
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    ConfigModule.forRoot(),
    TestModule,
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
