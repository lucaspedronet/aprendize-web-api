import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { InfraModule } from '@infra/infra.module';

/** resolvers **/
import { Resolvers } from '@edu/resolvers';

/** commands */

/** queries */
import { QueriesHandlers } from '@edu/queries';

@Module({
  imports: [CqrsModule, InfraModule],
  providers: [...Resolvers, ...QueriesHandlers],
})
export class EduModule {}
