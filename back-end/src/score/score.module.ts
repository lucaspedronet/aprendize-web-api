import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { InfraModule } from '@infra/infra.module';

@Module({
  imports: [CqrsModule, InfraModule],
})
export class ScoreModule {}
