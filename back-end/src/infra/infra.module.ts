import { Module } from '@nestjs/common';

/** services */
import { PrismaService } from '@infra/services';

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class InfraModule {}
