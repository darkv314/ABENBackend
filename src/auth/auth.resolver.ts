import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { UsuarioInputLogin } from 'src/app/usuarios/dto/userInputLogin.dto';
import { UsuarioLogin } from 'src/app/usuarios/dto/userLogin.dto';
import { GqlAuthGuard } from './guards/gql-auth.guard';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation((returns) => UsuarioLogin)
  @UseGuards(GqlAuthGuard)
  login(@Args('inputLogin') inputLogin: UsuarioInputLogin, @Context() context) {
    return this.authService.login(context.user);
  }
}
