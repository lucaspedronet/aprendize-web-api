import { Field, ObjectType } from '@nestjs/graphql';
import { Professor } from './professor';

@ObjectType()
export class InsertProfessorOutput {
    @Field({ nullable: true })
    message?: string;

    @Field(type => Professor)
    user: Professor;
}