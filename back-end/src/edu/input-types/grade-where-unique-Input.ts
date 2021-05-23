import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GradeWhereUniqueInput {
    @Field()
    id: string;
}