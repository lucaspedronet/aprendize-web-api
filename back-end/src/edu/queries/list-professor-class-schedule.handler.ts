import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';

/** inputs and outputs **/
import { ListProfessorClassScheduleOutput } from '@edu/models';

/** queries */
import { ListProfessorClassScheduleQuery } from './list-professor-class-schedule.query';

/** services */
import { PrismaService } from '@infra/services';

@QueryHandler(ListProfessorClassScheduleQuery)
export class ListProfessorClassScheduleHandler
  implements IQueryHandler<ListProfessorClassScheduleQuery>
{
  constructor(private readonly prisma: PrismaService) {}

  async execute(
    query: ListProfessorClassScheduleQuery,
  ): Promise<ListProfessorClassScheduleOutput> {
    const { date, professorId } = query;
    const output = new ListProfessorClassScheduleOutput();

    try {
      output.classSchedule = (await this.prisma.client.classSchedule.findMany({
        where: {
          AND: {
            professor: {
              id: professorId,
            },
            date: date,
          },
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
