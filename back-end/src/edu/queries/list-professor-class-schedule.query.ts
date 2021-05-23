import { IQuery } from '@nestjs/cqrs';

export class ListProfessorClassScheduleQuery implements IQuery {
  constructor(
    public readonly date: Date,
    public readonly professorId: string,
  ) {}
}
