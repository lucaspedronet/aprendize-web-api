import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

/** inputs and outputs */
import { InsertProfessorOutput } from '@user/models';

/** commands */
import { InsertProfessorCommand } from './insert-professor.command';

/** repositories */
import { ProfessorRepository } from '@user/repositories/professor.repository';

@CommandHandler(InsertProfessorCommand)
export class InsertProfessorHandler implements ICommandHandler<InsertProfessorCommand> {
    constructor(
        private readonly professorRepo: ProfessorRepository
    ) {}

    async execute(command: InsertProfessorCommand): Promise<InsertProfessorOutput> {
        const { input } = command;
        const output = new InsertProfessorOutput();

        try {
            output.user = (await this.professorRepo.create(input)) as any;
        } catch(error) {
            output.message = error.message;
        }

        return output;
    }
}