import { Field, Int, InputType } from '@nestjs/graphql';
import { ProfessorCreateNestedOneWithoutClassScheduleInput } from './professor-create-nested-one-without-class-schedule-input';
import { StudentCreateNestedOneWithoutClassScheduleInput } from './student-create-nested-one-without-class-schedule-input';
import { ClassTypeCreateNestedOneWithoutClassScheduleInput } from './class-type-create-nested-one-without-class-schedule-input';
import { GradeCreateNestedOneWithoutClassScheduleInput } from './grade-create-nested-one-without-class-schedule-input';

@InputType()
export class ClassScheduleCreateInput {
    @Field()
    id?: string;

    @Field((type) => Int)
    timeSlot: number;

    @Field()
    meetingLink: string;

    @Field((type) => Date)
    date: Date;

    @Field()
    reasonToDecline: string;

    @Field()
    accepted: boolean;

    @Field((type) => ProfessorCreateNestedOneWithoutClassScheduleInput)
    professor: ProfessorCreateNestedOneWithoutClassScheduleInput;

    @Field((type) => StudentCreateNestedOneWithoutClassScheduleInput)
    student: StudentCreateNestedOneWithoutClassScheduleInput;

    @Field((type) => ClassTypeCreateNestedOneWithoutClassScheduleInput)
    classType: ClassTypeCreateNestedOneWithoutClassScheduleInput;

    @Field((type) => GradeCreateNestedOneWithoutClassScheduleInput)
    grade: GradeCreateNestedOneWithoutClassScheduleInput;
}