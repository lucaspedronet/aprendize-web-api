import { QueryHandler, IQueryHandler, ofType } from '@nestjs/cqrs';

/** inputs and outputs **/
import { ListProfessorOutput } from '@user/models';

/** queries */
import { ListProfessorQuery } from './list-professor.query';

/** repositories */
import { ProfessorRepository } from '@user/repositories/professor.repository';

@QueryHandler(ListProfessorQuery)
export class ListProfessorHandler implements IQueryHandler<ListProfessorQuery> {
    constructor(
        private readonly professorRepo: ProfessorRepository
    ) {}

    async execute(query: ListProfessorQuery): Promise<ListProfessorOutput> {
        const { id } = query;
        const output = new ListProfessorOutput();

        try {
            output.user = (await this.professorRepo.listProfessor(id)) as any;
            output.success = true;
        } catch(error) {
            output.success = false;
            output.message = error.message;
        }

        return output;
    }
}