import { Test, TestingModule } from '@nestjs/testing';
import { ClassGateway } from './class.gateway';

describe('ClassGateway', () => {
  let gateway: ClassGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClassGateway],
    }).compile();

    gateway = module.get<ClassGateway>(ClassGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
