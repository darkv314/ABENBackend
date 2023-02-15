import { Injectable, NotFoundException } from '@nestjs/common';
import { UsuariosService } from 'src/app/usuarios/usuario.service';
import { Usuario } from 'src/app/usuarios/dto/user.dto';
import { UsuarioLogin } from 'src/app/usuarios/dto/userLogin.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usuariosService: UsuariosService,
    private jwtService: JwtService,
  ) {}

  async validarUsuario(email: string, password: string): Promise<Usuario> {
    const usuario = await this.usuariosService.findByEmail(email);
    let valid = false;
    try {
      valid = await bcrypt.compare(password, usuario?.password);
    } catch (err) {
      throw new NotFoundException();
    }

    if (usuario && valid) {
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
