import { Field, ObjectType } from '@nestjs/graphql';
import { User } from './user';

@ObjectType()
export class ListProfessorOutput {
    @Field({ nullable: true })
    success: boolean;

    @Field({ nullable: true })
    message: string;

    @Field((type) => User)
    user: User;
}