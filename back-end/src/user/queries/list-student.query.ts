import { IQuery } from '@nestjs/cqrs';

export class ListStudentQuery implements IQuery {
  constructor(public readonly id: string) {}
}
