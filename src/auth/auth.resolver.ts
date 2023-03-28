import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { UsuarioInputLogin } from 'src/app/usuarios/dto/userInputLogin.dto';
import { UsuarioAuth } from 'src/app/usuarios/dto/userAuth.dto';
import { GqlAuthGuard } from './guards/gql-auth.guard';
import { CrearClienteInput } from 'src/app/usuarios/dto/crearCliente.dto';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation((returns) => UsuarioAuth)
  login(@Args('inputLogin') inputLogin: UsuarioInputLogin, @Context() context) {
    // console.log('asñdknalskdn');
    return this.authService.login(context.user);
  }

  @Mutation((returns) => UsuarioAuth)
  async signup(@Args('cliente') cliente: CrearClienteInput) {
    return this.authService.crearCliente(cliente);
  }
}
