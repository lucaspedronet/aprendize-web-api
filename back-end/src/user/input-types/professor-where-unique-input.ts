import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ProfessorWhereUniqueInput {
    @Field()
    id: string;
}