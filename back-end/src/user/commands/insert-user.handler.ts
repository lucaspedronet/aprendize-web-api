import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

/** inputs and outputs */
import { InsertUserOutput } from '@user/models';

/** commands */
import { InsertUserCommand } from './insert-user.command';

/** services */
import { PrismaService } from '@infra/services';

/**
 * Cria usuário
 */
@CommandHandler(InsertUserCommand)
export class InsertUserHandler implements ICommandHandler<InsertUserCommand> {
  constructor(private readonly prisma: PrismaService) {}

  async execute(command: InsertUserCommand): Promise<InsertUserOutput> {
    const { input } = command;
    const output = new InsertUserOutput();

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
