import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class StudentWhereUniqueInput {
    @Field()
    id: string;
}