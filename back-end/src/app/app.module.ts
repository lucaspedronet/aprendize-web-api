import { GraphQLModule } from '@nestjs/graphql';
import { GraphqlOptions } from './graphql.options';
import { Module } from '@nestjs/common';
import { ClassGateway } from '../gateways/class.gateway';

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      useClass: GraphqlOptions,
    }),
  ],
  controllers: [],
  providers: [ClassGateway],
})
export class AppModule {}
