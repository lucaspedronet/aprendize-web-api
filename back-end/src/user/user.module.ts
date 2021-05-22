import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { InfraModule } from '@infra/infra.module';

/** resolvers **/
import { Resolvers } from '@user/resolvers';

/** commands */
import { CommandHandlers } from '@user/commands';

/** queries */
import { QueriesHandlers } from '@user/queries';

@Module({
  imports: [CqrsModule, InfraModule],
  providers: [...Resolvers, ...CommandHandlers, ...QueriesHandlers],
})
export class UserModule {}
