import { Field, InputType } from '@nestjs/graphql';
import { ClassTypeWhereUniqueInput } from './class-type-where-unique-input';

@InputType()
export class ClassTypeCreateNestedOneWithoutClassScheduleInput {
    @Field(type => ClassTypeWhereUniqueInput)
    connect: ClassTypeWhereUniqueInput;
}