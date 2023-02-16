import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { UsuarioInputLogin } from 'src/app/usuarios/dto/userInputLogin.dto';
import { UsuarioAuth } from 'src/app/usuarios/dto/userAuth.dto';
import { GqlAuthGuard } from './guards/gql-auth.guard';
import { CreateClientInput } from 'src/app/usuarios/dto/createClient.dto';
import { UsuariosService } from 'src/app/usuarios/usuario.service';

@Resolver()
export class AuthResolver {
  constructor(
    private authService: AuthService,
    private usuariosService: UsuariosService,
  ) {}

  @UseGuards(GqlAuthGuard)
  @Mutation((returns) => UsuarioAuth)
  login(@Args('inputLogin') inputLogin: UsuarioInputLogin, @Context() context) {
    return this.authService.login(context.user);
  }

  @Mutation((returns) => UsuarioAuth)
  async signup(@Args('usuario') usuario: CreateClientInput) {
    return this.authService.createCliente(usuario);
  }
}
