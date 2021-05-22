import { ICommand } from '@nestjs/cqrs';
import { InsertUserInput } from '@user/input-types';

export class InsertUserCommand implements ICommand {
  constructor(public readonly input: InsertUserInput) {}
}
