import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ClassTypeWhereUniqueInput {
    @Field()
    id: string;
}