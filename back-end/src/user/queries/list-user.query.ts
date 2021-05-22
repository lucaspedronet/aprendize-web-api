import { IQuery } from '@nestjs/cqrs';

export class ListUserQuery implements IQuery {
  constructor(public readonly id: string) {}
}
