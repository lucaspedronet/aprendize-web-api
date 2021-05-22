import { QueryBus } from '@nestjs/cqrs';
import { Args, Query, Resolver } from '@nestjs/graphql';

import { User } from '@user/models';

/** outputs **/
import { ListUserOutput } from '@user/models';

/** queries */
import { ListUserQuery } from '@user/queries';

@Resolver((of) => User)
export class ListUserResolver {
  constructor(private readonly queryBus: QueryBus) {}

  @Query((returns) => ListUserOutput)
  async listUser(@Args('id') id: string): Promise<ListUserOutput> {
    const output = await this.queryBus.execute<
      ListUserQuery,
      Promise<ListUserOutput>
    >(new ListUserQuery(id));

    return output;
  }
}
