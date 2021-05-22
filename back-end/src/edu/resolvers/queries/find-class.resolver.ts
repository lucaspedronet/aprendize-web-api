import { QueryBus } from '@nestjs/cqrs';
import { Args, Query, Resolver } from '@nestjs/graphql';

import { ClassSchedule } from '@edu/models';

/** outputs **/
import { FindClassOutput } from '@edu/models';

/** queries */
import { FindClassQuery } from '@edu/queries';

@Resolver((of) => ClassSchedule)
export class FindClassResolver {
  constructor(private readonly queryBus: QueryBus) {}

  @Query((returns) => FindClassOutput)
  async findClass(
    @Args('meetingLink') meetingLink: string,
  ): Promise<FindClassOutput> {
    const output = await this.queryBus.execute<
      FindClassQuery,
      Promise<FindClassOutput>
    >(new FindClassQuery(meetingLink));

    return output;
  }
}
