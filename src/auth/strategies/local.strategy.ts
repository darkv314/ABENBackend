import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'email',
    });
  }

  async validate(email: string, password: string) {
    const usuario = await this.authService.validarUsuario(email, password);
    if (!usuario) {
      throw new UnauthorizedException('Usuario o contraseña incorrectos');
    }
    return usuario;
  }
}
