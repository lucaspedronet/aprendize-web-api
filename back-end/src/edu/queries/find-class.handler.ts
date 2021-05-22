import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';

/** inputs and outputs **/
import { FindClassOutput } from '@edu/models';

/** queries */
import { FindClassQuery } from './find-class.query';

/** services */
import { PrismaService } from '@infra/services';

@QueryHandler(FindClassQuery)
export class FindClassHandler implements IQueryHandler<FindClassQuery> {
  constructor(private readonly prisma: PrismaService) {}

  async execute(query: FindClassQuery): Promise<FindClassOutput> {
    const { meetingLink } = query;
    const output = new FindClassOutput();

    try {
      output.classSchedule = (await this.prisma.client.classSchedule.findMany({
        where: {
          meetingLink: meetingLink,
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
