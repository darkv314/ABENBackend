import { Module } from '@nestjs/common';
import { NotificacionDocumentosController } from './notificacion-documentos.controller';

@Module({
  controllers: [NotificacionDocumentosController]
})
export class NotificacionDocumentosModule {}
