import { IQuery } from '@nestjs/cqrs';

export class FindClassQuery implements IQuery {
  constructor(public readonly id: string) {}
}
