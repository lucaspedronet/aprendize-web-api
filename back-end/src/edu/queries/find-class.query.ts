import { IQuery } from '@nestjs/cqrs';

export class FindClassQuery implements IQuery {
  constructor(public readonly meetingLink: string) {}
}
