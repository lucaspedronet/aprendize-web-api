import { QueryBus } from '@nestjs/cqrs';
import { Args, Query, Resolver } from '@nestjs/graphql';

import { ClassSchedule } from '@edu/models';

/** outputs **/
import { ListProfessorClassScheduleOutput } from '@edu/models';

/** queries */
import { ListProfessorClassScheduleQuery } from '@edu/queries';

@Resolver((of) => ClassSchedule)
export class ListProfessorClassScheduleResolver {
  constructor(private readonly queryBus: QueryBus) {}

  @Query((returns) => ListProfessorClassScheduleOutput)
  async listClassType(
    @Args('id') professorId: string,
    @Args('date') date: Date,
  ): Promise<ListProfessorClassScheduleOutput> {
    const output = await this.queryBus.execute<
      ListProfessorClassScheduleQuery,
      Promise<ListProfessorClassScheduleOutput>
    >(new ListProfessorClassScheduleQuery(date, professorId));

    return output;
  }
}
