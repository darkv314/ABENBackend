import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolGuard } from 'src/auth/guards/rol.guard';
@UseGuards(JwtAuthGuard, RolGuard)
@Controller('test')
export class TestController {
  @Get()
  getTest() {
    // console.log('a');
    return 'alol';
  }
}
