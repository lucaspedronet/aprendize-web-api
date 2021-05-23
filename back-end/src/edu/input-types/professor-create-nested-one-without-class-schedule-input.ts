import { Field, InputType } from '@nestjs/graphql';
import { ProfessorWhereUniqueInput } from '@user/input-types';

@InputType()
export class ProfessorCreateNestedOneWithoutClassScheduleInput {
    @Field(type => ProfessorWhereUniqueInput)
    connect: ProfessorWhereUniqueInput;
}