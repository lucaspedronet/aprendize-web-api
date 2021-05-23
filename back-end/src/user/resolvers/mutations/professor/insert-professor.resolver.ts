import { CommandBus } from '@nestjs/cqrs';
import { Resolver, Args, Mutation } from '@nestjs/graphql';

import { User } from '@user/models';

/** inputs **/
import { InsertProfessorInput } from '@user/input-types';

/** outputs **/
import { InsertProfessorOutput } from '@user/models';

/** commands **/
import { InsertProfessorCommand } from '@user/commands';

@Resolver(of => User)
export class InsertProfessorResolver {
    constructor(private readonly commandBus: CommandBus) {}

    @Mutation(returns => InsertProfessorInput)
    async insertProfessor(
        @Args('id') id: InsertProfessorInput
    ): Promise<InsertProfessorOutput> {
        return await this.commandBus.execute(
            new InsertProfessorCommand(id)
        );
    }
}