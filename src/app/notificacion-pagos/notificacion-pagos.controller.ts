import { Controller, Post } from '@nestjs/common';

@Controller('notificacion-pagos')
export class NotificacionPagosController {
  @Post()
  notificacionPagos() {
    return 'notificacionPagos';
  }
}
