import { Field, ObjectType } from '@nestjs/graphql';

import { User } from './user';
import { Student } from './student';

@ObjectType()
export class InsertStudentOutput {
  @Field({ nullable: true })
  message?: string;

  @Field(type => User)
  user: User;
}
