import { Field, ObjectType } from '@nestjs/graphql';
import { ClassSchedule } from './class-schedule';

@ObjectType()
export class ListClassScheduleOutput {
    @Field({ nullable: true })
    success: boolean;

    @Field({ nullable: true })
    message: string;

    @Field(type => ClassSchedule, { nullable: true })
    classType: ClassSchedule;
}