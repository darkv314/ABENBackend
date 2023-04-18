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
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
// import { TestModule } from './app/test/test.module';
import { NotificacionDocumentosModule } from './app/notificacion-documentos/notificacion-documentos.module';
import { NotificacionPagosModule } from './app/notificacion-pagos/notificacion-pagos.module';

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
    NotificacionDocumentosModule,
    NotificacionPagosModule,
    PrismaModule,
    UsuariosModule,
    RolesModule,
    EstadosModule,
    ServiciosModule,
    AuthModule,
  ],
})
export class AppModule {}
