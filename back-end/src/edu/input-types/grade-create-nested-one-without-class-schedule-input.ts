import { Field, InputType } from '@nestjs/graphql';
import { GradeWhereUniqueInput } from './grade-where-unique-Input';

@InputType()
export class GradeCreateNestedOneWithoutClassScheduleInput {
    @Field(type => GradeWhereUniqueInput)
    connect: GradeWhereUniqueInput;
}