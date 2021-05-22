import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Student, Professor } from '@user/models';
import { Expertise } from '@edu/models';

@ObjectType()
export class StudentScore {
  @Field()
  id: string;

  @Field((type) => Int)
  score: number;

  @Field()
  expertiseId: string;

  @Field((type) => Expertise)
  expertise: Expertise;

  @Field()
  professorId: string;

  @Field((type) => Professor)
  professor: Professor;

  @Field()
  studentId: string;

  @Field((type) => Student)
  student: Student;
}
