import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';

/** inputs and outputs **/
import { ListClassTypeOutput } from '@edu/models';

/** queries */
import { ListClassTypeQuery } from './list-class-type.query';

/** services */
import { PrismaService } from '@infra/services';

@QueryHandler(ListClassTypeQuery)
export class ListClassTypeHandler implements IQueryHandler<ListClassTypeQuery> {
  constructor(private readonly prisma: PrismaService) {}

  async execute(query: ListClassTypeQuery): Promise<ListClassTypeOutput> {
    const output = new ListClassTypeOutput();

    try {
      output.classType = (await this.prisma.client.classType.findMany()) as any;
      output.success = true;

      return output;
    } catch (error) {
      output.success = false;
      output.message = error.message;

      return output;
    }
  }
}
