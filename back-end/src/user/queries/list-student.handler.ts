import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';

/** inputs and outputs **/
import { ListStudentOutput } from '@user/models';

/** queries */
import { ListStudentQuery } from './list-student.query';

/** repositories */
import { StudentRepository } from '@user/repositories/student.repository';

@QueryHandler(ListStudentQuery)
export class ListStudentHandler implements IQueryHandler<ListStudentQuery> {
  constructor(
    private readonly studentRepo: StudentRepository
  ) {}

  async execute(query: ListStudentQuery): Promise<ListStudentOutput> {
    const { id } = query;
    const output = new ListStudentOutput();

    try {
      output.user = (await this.studentRepo.listStudent(id)) as any;
      output.success = true;
    } catch (error) {
      output.success = false;
      output.message = error.message;
    }

    return output;
  }
}
