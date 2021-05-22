import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Professor } from '@user/models';
import { Grade, ClassType } from '@edu/models';
import { StudentScore, ProfessorScore } from '@score/models';

@ObjectType()
export class Expertise {
  @Field()
  id: string;

  @Field((type) => Int)
  price: number;

  @Field((type) => Int)
  duration: number;

  @Field()
  professorId: string;

  @Field((type) => Professor)
  professor: Professor;

  @Field()
  classTypeId: string;

  @Field((type) => ClassType)
  classType: ClassType;

  @Field()
  gradeId: string;

  @Field((type) => Grade)
  grade: Grade;

  @Field((type) => ProfessorScore, { nullable: true })
  professorScore: ProfessorScore;

  @Field((type) => StudentScore, { nullable: true })
  studentScore: StudentScore;
}
