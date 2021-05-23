import { QueryBus } from '@nestjs/cqrs';
import { Args, Query, Resolver } from '@nestjs/graphql';

import { User } from '@user/models';

/** outputs **/
import { ListProfessorOutput } from '@user/models';

/** queries */
import { ListProfessorQuery } from '@user/queries';

@Resolver(of => User)
export class ListProfessorResolver {
    constructor(private readonly queryBus: QueryBus) {}

    @Query(returns => ListProfessorOutput)
    async listProfessor(@Args('id') id: string): Promise<ListProfessorOutput> {
        return await this.queryBus.execute<ListProfessorQuery, Promise<ListProfessorOutput>>(
            new ListProfessorQuery(id)
        )
    }
}