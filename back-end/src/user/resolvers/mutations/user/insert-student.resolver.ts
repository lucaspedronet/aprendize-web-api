import { CommandBus } from '@nestjs/cqrs';
import { Resolver, Args, Mutation } from '@nestjs/graphql';

import { User } from '@user/models';

/** inputs **/
import { InsertStudentInput } from '@user/input-types/insert-student-input';

/** outputs **/
import { InsertStudentOutput } from '@user/models';

/** commands **/
import { InsertStudentCommand } from '@user/commands';

@Resolver((of) => User)
export class InsertStudentResolver {
  constructor(private readonly commadBus: CommandBus) {}

  @Mutation((returns) => InsertStudentOutput)
  async insertStudent(
    @Args('input') input: InsertStudentInput,
  ): Promise<InsertStudentOutput> {
    const output: InsertStudentOutput = await this.commadBus.execute(
      new InsertStudentCommand(input),
    );

    return output;
  }
}
