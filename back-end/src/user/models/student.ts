import { Field, ObjectType } from '@nestjs/graphql';
import { User } from './user';
import { StudentScore, ProfessorScore } from '@score/models';
import { ClassSchedule } from '@edu/models';

@ObjectType()
export class Student {
  @Field()
  id?: string;

  @Field()
  grade: string;

  @Field()
  fathersName: string;

  @Field()
  mothersName: string;

  @Field()
  parentEmail: string;

  @Field()
  userId?: string;

  @Field((type) => Date)
  createdAt: Date;

  @Field((type) => Date)
  updatedAt: Date;

  @Field((type) => Date)
  deletedAt?: Date;

  @Field((type) => User)
  user?: User;

  @Field((type) => ProfessorScore, { nullable: true })
  professorScore?: ProfessorScore;

  @Field((type) => StudentScore, { nullable: true })
  studentScore?: StudentScore;

  @Field((type) => ClassSchedule, { nullable: true })
  classSchedule?: ClassSchedule;
}
