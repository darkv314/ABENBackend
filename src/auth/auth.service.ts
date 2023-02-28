import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { UsuariosService } from 'src/app/usuarios/usuario.service';
import { Usuario } from 'src/app/usuarios/dto/user.dto';
import { UsuarioAuth } from 'src/app/usuarios/dto/userAuth.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CrearClienteInput } from 'src/app/usuarios/dto/crearCliente.dto';

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

  async crearCliente(cliente: CrearClienteInput) {
    const nuevoCliente = await this.usuariosService.crearCliente({
      ...cliente,
      password: await bcrypt.hash(cliente.password, 12),
    });
    if (nuevoCliente) {
      return this.login(nuevoCliente);
    } else {
      throw new ConflictException();
    }
  }

  async login(usuario: Usuario): Promise<UsuarioAuth> {
    return {
      access_token: this.jwtService.sign({
        nombre: usuario.nombre,
        rol: usuario.rol.nombre,
        id: usuario.id,
      }),
      nombre: usuario.nombre,
      id: usuario.id,
      rol: usuario.rol,
    };
  }
}
