import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

/** inputs and outputs */
import { InsertStudentOutput } from '@user/models';

/** commands */
import { InsertStudentCommand } from './insert-student.command';

/** services */
import { PrismaService } from '@infra/services';

/**
 * Cria usuário
 */
@CommandHandler(InsertStudentCommand)
export class InsertStudentHandler implements ICommandHandler<InsertStudentCommand> {
  constructor(private readonly prisma: PrismaService) {}

  async execute(command: InsertStudentCommand): Promise<InsertStudentOutput> {
    const { input } = command;
    const output = new InsertStudentOutput();

    try {
      output.user = (await this.prisma.user.create({
        data: { ...input },
      })) as any;
    } catch (error) {
      output.message = error.message;
    }

    return output;
  }
}
