import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class StudentCreateWithoutUserInput {
    @Field()
    grade: string;

    @Field()
    fathersName: string;

    @Field()
    mothersName: string;

    @Field()
    parentEmail: string;

    @Field((type) => Date)
    createdAt: Date;

    @Field((type) => Date)
    updatedAt: Date;

    @Field((type) => Date, { nullable: true })
    deletedAt?: Date;
}