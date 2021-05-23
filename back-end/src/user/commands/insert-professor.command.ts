import { ICommand } from '@nestjs/cqrs';
import { InsertProfessorInput } from '@user/input-types';

export class InsertProfessorCommand implements ICommand {
    constructor(public readonly input: InsertProfessorInput) {}
}