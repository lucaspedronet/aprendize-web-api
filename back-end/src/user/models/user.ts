import { Field, ObjectType } from '@nestjs/graphql';
import { Student } from './student';
import { Professor } from './professor';
import { Address } from './address';
import { Gender } from '@user/enums';

@ObjectType()
export class User {
  @Field()
  id?: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field(type => Gender)
  gender: Gender;

  @Field((type) => Date)
  dateOfBirth?: Date;

  @Field()
  isActive: boolean;

  @Field((type) => Date)
  createdAt?: Date;

  @Field((type) => Date)
  updatedAt?: Date;

  @Field((type) => Date, { nullable: true })
  deletedAt?: Date;

  @Field((type) => Student, { nullable: true })
  student?: Student;

  @Field((type) => Professor, { nullable: true })
  professor?: Professor;

  @Field((type) => Address, { nullable: true })
  address?: Address;
}
