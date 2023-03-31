import { Test, TestingModule } from '@nestjs/testing';
import { NotificacionDocumentosController } from './notificacion-documentos.controller';

describe('NotificacionDocumentosController', () => {
  let controller: NotificacionDocumentosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotificacionDocumentosController],
    }).compile();

    controller = module.get<NotificacionDocumentosController>(NotificacionDocumentosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
