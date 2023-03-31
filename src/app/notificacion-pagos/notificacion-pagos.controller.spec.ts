import { Test, TestingModule } from '@nestjs/testing';
import { NotificacionPagosController } from './notificacion-pagos.controller';

describe('NotificacionPagosController', () => {
  let controller: NotificacionPagosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotificacionPagosController],
    }).compile();

    controller = module.get<NotificacionPagosController>(NotificacionPagosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
