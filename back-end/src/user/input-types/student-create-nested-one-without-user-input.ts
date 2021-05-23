import { Field, InputType } from '@nestjs/graphql';
import { StudentCreateWithoutUserInput } from './student-create-without-user-input';

@InputType()
export class StudentCreateNestedOneWithoutUserInput {
    @Field(type => StudentCreateWithoutUserInput)
    create: StudentCreateWithoutUserInput;
}