import { Module } from '@nestjs/common';
import { NotificacionPagosController } from './notificacion-pagos.controller';

@Module({
  controllers: [NotificacionPagosController]
})
export class NotificacionPagosModule {}
