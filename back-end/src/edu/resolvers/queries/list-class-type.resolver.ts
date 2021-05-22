import { QueryBus } from '@nestjs/cqrs';
import { Query, Resolver } from '@nestjs/graphql';

import { ClassType } from '@edu/models';

/** outputs **/
import { ListClassTypeOutput } from '@edu/models';

/** queries */
import { ListClassTypeQuery } from '@edu/queries';

@Resolver((of) => ClassType)
export class ListClassTypeResolver {
  constructor(private readonly queryBus: QueryBus) {}

  @Query((returns) => ListClassTypeOutput)
  async listClassType(): Promise<ListClassTypeOutput> {
    const output = await this.queryBus.execute<
      ListClassTypeQuery,
      Promise<ListClassTypeOutput>
    >(new ListClassTypeQuery());

    return output;
  }
}
