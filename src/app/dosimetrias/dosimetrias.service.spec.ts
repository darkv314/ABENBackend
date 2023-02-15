import { Test, TestingModule } from '@nestjs/testing';
import { DosimetriasService } from './dosimetrias.service';

describe('DosimetriasService', () => {
  let service: DosimetriasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DosimetriasService],
    }).compile();

    service = module.get<DosimetriasService>(DosimetriasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
