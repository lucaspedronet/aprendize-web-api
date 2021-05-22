import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';

/** inputs and outputs **/
import { ListUserOutput } from '@user/models';

/** queries */
import { ListUserQuery } from './list-user.query';

/** services */
import { PrismaService } from '@infra/services';

@QueryHandler(ListUserQuery)
export class ListUserHandler implements IQueryHandler<ListUserQuery> {
  constructor(private readonly prisma: PrismaService) {}

  async execute(query: ListUserQuery): Promise<ListUserOutput> {
    const { id } = query;
    const output = new ListUserOutput();

    try {
      output.user = (await this.prisma.client.user.findMany({
        where: {
          id: id,
        },
      })) as any;
      output.success = true;

      return output;
    } catch (error) {
      output.success = false;
      output.message = error.message;

      return output;
    }
  }
}
