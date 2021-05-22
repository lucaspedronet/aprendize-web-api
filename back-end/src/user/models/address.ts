import { Field, ObjectType } from '@nestjs/graphql';
import { User } from './user';

@ObjectType()
export class Address {
  @Field()
  id: string;

  @Field()
  street: string;

  @Field()
  city: string;

  @Field()
  state: string;

  @Field()
  zipCode: string;

  @Field()
  country: string;

  @Field()
  userId: string;

  @Field((type) => User)
  user: User;
}
