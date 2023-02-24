import { Test, TestingModule } from '@nestjs/testing';
import { MuestrasResolver } from './muestras.resolver';

describe('MuestrasResolver', () => {
  let resolver: MuestrasResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MuestrasResolver],
    }).compile();

    resolver = module.get<MuestrasResolver>(MuestrasResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
