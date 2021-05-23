import { ICommand } from '@nestjs/cqrs';
import { ClassScheduleCreateInput } from '@edu/input-types';

export class InsertClassScheduleCommand implements ICommand {
    constructor(
        public readonly input: ClassScheduleCreateInput
    ) {}
}