import { CommandBus } from '@nestjs/cqrs';
import { Resolver, Args, Mutation } from '@nestjs/graphql';

import { User } from '@user/models';

/** inputs **/
import { InsertProfessorInput } from '@user/input-types';

/** outputs **/
import { InsertProfessorOutput } from '@user/models';

/** commands **/
import { InsertProfessorCommand } from '@user/commands';

@Resolver((of) => User)
export class InsertProfessorResolver {
    constructor(private readonly commandBus: CommandBus) { }

    @Mutation((returns) => InsertProfessorOutput)
    async insertProfessor(
        @Args('input') input: InsertProfessorInput
    ): Promise<InsertProfessorOutput> {
        return await this.commandBus.execute(
            new InsertProfessorCommand(input)
        );
    }
}