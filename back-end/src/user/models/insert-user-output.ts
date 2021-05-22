import { Field, ObjectType } from '@nestjs/graphql';

import { User } from './user';

@ObjectType()
export class InsertUserOutput {
  @Field({ nullable: true })
  message: string;

  @Field((type) => User, { nullable: true })
  user: User;
}
