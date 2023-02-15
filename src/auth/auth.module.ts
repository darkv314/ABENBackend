import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { LocalStrategy } from './strategies/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { UsuariosModule } from 'src/app/usuarios/usuario.module';
import { JwtModule } from '@nestjs/jwt/dist';
import { ConfigModule } from '@nestjs/config/dist';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    PassportModule,
    UsuariosModule,
    ConfigModule,
    JwtModule.register({
      signOptions: { expiresIn: '120s' },
      secret: process.env.JWT_SECRET,
    }),
  ],
  providers: [AuthService, AuthResolver, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
