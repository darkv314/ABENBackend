import { Injectable } from '@nestjs/common';
import { UsuariosService } from 'src/app/usuarios/usuario.service';
import { Usuario } from 'src/app/usuarios/dto/user.dto';
import { UsuarioInputLogin } from 'src/app/usuarios/dto/userInputLogin.dto';
import { UsuarioLogin } from 'src/app/usuarios/dto/userLogin.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usuariosService: UsuariosService,
    private jwtService: JwtService,
  ) {}

  async validarUsuario(email: string, password: string): Promise<Usuario> {
    const usuario = await this.usuariosService.findByEmail(email);

    if (usuario && usuario.password === password) {
      const { password, rolId, ...resultado } = usuario;

      return resultado;
    }
    return null;
  }

  async login(usuario: Usuario): Promise<UsuarioLogin> {
    return {
      access_token: this.jwtService.sign({
        nombre: usuario.nombre,
        rol: usuario.rol.nombre,
        sub: usuario.id,
      }),
      nombre: usuario.nombre,
      email: usuario.email,
      telefono: usuario.telefono,
      rol: usuario.rol,
    };
  }
}
