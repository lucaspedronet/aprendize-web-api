import { ICommand } from '@nestjs/cqrs';
import { InsertStudentInput } from '@user/input-types';

export class InsertStudentCommand implements ICommand {
  constructor(public readonly input: InsertStudentInput) {}
}
