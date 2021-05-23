import { QueryBus } from '@nestjs/cqrs';
import { Args, Query, Resolver } from '@nestjs/graphql';

import { User } from '@user/models';

/** outputs **/
import { ListStudentOutput } from '@user/models';

/** queries */
import { ListStudentQuery } from '@user/queries';

@Resolver((of) => User)
export class ListStudentResolver {
  constructor(private readonly queryBus: QueryBus) {}

  @Query((returns) => ListStudentOutput)
  async listStudent(@Args('id') id: string): Promise<ListStudentOutput> {
    return await this.queryBus.execute<ListStudentQuery, Promise<ListStudentOutput>>(
      new ListStudentQuery(id)
    );
  }
}
