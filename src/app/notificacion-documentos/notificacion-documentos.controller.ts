import { Controller, Post } from '@nestjs/common';

@Controller('notificacion-documentos')
export class NotificacionDocumentosController {
  @Post()
  notificacionDocumentos() {
    return 'notificacionDocumentos';
  }
}
