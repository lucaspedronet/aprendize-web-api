import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ProfessorCreateWithoutUserInput {
    @Field()
    graduationLevel: string;
}