import { Test, TestingModule } from '@nestjs/testing';
import { ServiciosResolver } from './servicios.resolver';

describe('ServiciosResolver', () => {
  let resolver: ServiciosResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServiciosResolver],
    }).compile();

    resolver = module.get<ServiciosResolver>(ServiciosResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
