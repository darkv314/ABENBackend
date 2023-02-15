import { Test, TestingModule } from '@nestjs/testing';
import { CalibracionesService } from './calibraciones.service';

describe('CalibracionesService', () => {
  let service: CalibracionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalibracionesService],
    }).compile();

    service = module.get<CalibracionesService>(CalibracionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
