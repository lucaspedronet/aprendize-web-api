import { Field, ObjectType } from '@nestjs/graphql';
import { User } from './user';
import { StudentScore, ProfessorScore } from '@score/models';
import { Expertise, ClassSchedule } from '@edu/models';

@ObjectType()
export class Professor {
  @Field()
  id: string;

  @Field()
  graduationLevel: string;

  @Field()
  userId: string;

  @Field((type) => User)
  user: User;

  @Field((type) => ProfessorScore, { nullable: true })
  professorScore: ProfessorScore;

  @Field((type) => StudentScore, { nullable: true })
  studentScore: StudentScore;

  @Field((type) => Expertise, { nullable: true })
  expertise: Expertise;

  @Field((type) => ClassSchedule, { nullable: true })
  classSchedule: ClassSchedule;
}
