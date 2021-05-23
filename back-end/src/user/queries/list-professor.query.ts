import { IQuery } from '@nestjs/cqrs';

export class ListProfessorQuery implements IQuery {
    constructor(public readonly id: string) {}
}