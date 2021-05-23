import { Field, InputType } from '@nestjs/graphql';
import { StudentWhereUniqueInput } from '@user/input-types';

@InputType()
export class StudentCreateNestedOneWithoutClassScheduleInput {
    @Field(type => StudentWhereUniqueInput)
    connect: StudentWhereUniqueInput;
}