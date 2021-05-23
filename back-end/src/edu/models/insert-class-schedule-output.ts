import { Field, ObjectType } from '@nestjs/graphql';
import { ClassSchedule } from './class-schedule';

@ObjectType()
export class InsertClassScheduleOutput {
    @Field({ nullable: true })
    message?: string;

    @Field(type => ClassSchedule, { nullable: true })
    classType: ClassSchedule;
}