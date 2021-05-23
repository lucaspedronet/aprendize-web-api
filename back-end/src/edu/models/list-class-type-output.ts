import { Field, ObjectType } from '@nestjs/graphql';
import { ClassType } from './class-type';

@ObjectType()
export class ListClassTypeOutput {
  @Field({ nullable: true })
  success: boolean;

  @Field({ nullable: true })
  message: string;

  @Field((type) => ClassType)
  classType: [ClassType];
}
