import { Field, InputType } from '@nestjs/graphql';
import { Gender } from '@user/enums';
import { ProfessorCreateNestedOneWithoutUserInput } from './professor-create-nested-one-without-user-input';

@InputType()
export class InsertProfessorInput {
    @Field()
    id?: string;

    @Field()
    firstName: string;

    @Field()
    lastName: string;

    @Field()
    email: string;

    @Field(type => Gender)
    gender: Gender;

    @Field((type) => Date)
    dateOfBirth: Date;

    @Field()
    isActive: boolean;

    @Field((type) => Date)
    createdAt: Date;

    @Field((type) => Date)
    updatedAt: Date;

    @Field((type) => Date, { nullable: true })
    deletedAt?: Date;

    @Field((type) => ProfessorCreateNestedOneWithoutUserInput)
    professor: ProfessorCreateNestedOneWithoutUserInput;
}