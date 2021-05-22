import { CommandBus } from '@nestjs/cqrs';
import { Resolver, Args, Mutation } from '@nestjs/graphql';

import { User } from '@user/models';

/** inputs **/
import { InsertUserInput } from '@user/input-types/insert-user-input';

/** outputs **/
import { InsertUserOutput } from '@user/models';

/** commands **/
import { InsertUserCommand } from '@user/commands';

@Resolver((of) => User)
export class InsertUserResolver {
  constructor(private readonly commadBus: CommandBus) {}

  @Mutation((returns) => InsertUserOutput)
  async insertUser(
    @Args('input') input: InsertUserInput,
  ): Promise<InsertUserOutput> {
    const output: InsertUserOutput = await this.commadBus.execute(
      new InsertUserCommand(input),
    );

    return output;
  }
}
