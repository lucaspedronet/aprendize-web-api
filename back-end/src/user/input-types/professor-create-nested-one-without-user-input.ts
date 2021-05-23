import { Field, InputType } from '@nestjs/graphql';
import { ProfessorCreateWithoutUserInput } from './professor-create-without-user-input'

@InputType()
export class ProfessorCreateNestedOneWithoutUserInput {
    @Field(type => ProfessorCreateWithoutUserInput)
    create: ProfessorCreateWithoutUserInput;
}