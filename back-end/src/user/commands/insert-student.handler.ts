import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

/** inputs and outputs */
import { InsertStudentOutput } from '@user/models';

/** commands */
import { InsertStudentCommand } from './insert-student.command';

/** repositories */
import { StudentRepository } from '@user/repositories/student.repository';

@CommandHandler(InsertStudentCommand)
export class InsertStudentHandler implements ICommandHandler<InsertStudentCommand> {
  constructor(private readonly studentRepo: StudentRepository) {}

  async execute(command: InsertStudentCommand): Promise<InsertStudentOutput> {
    const { input } = command;
    const output = new InsertStudentOutput();

    try {
      output.user = (this.studentRepo.create(input)) as any;
    } catch (error) {
      output.message = error.message;
    }

    return output;
  }
}
