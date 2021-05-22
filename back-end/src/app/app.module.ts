import { GraphQLModule } from '@nestjs/graphql';
import { GraphqlOptions } from './graphql.options';
import { Module } from '@nestjs/common';

import { ClassGateway } from '@gateways/class.gateway';
import { ScoreModule } from '@score/score.module';
import { EduModule } from '@edu/edu.module';
import { UserModule } from '@user/user.module';

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      useClass: GraphqlOptions,
    }),
    UserModule,
    EduModule,
    ScoreModule,
  ],
  controllers: [],
  providers: [ClassGateway],
})
export class AppModule {}
