import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Grade } from './grade';
import { Student, Professor } from '@user/models';
import { ClassType } from './class-type';

@ObjectType()
export class ClassSchedule {
  @Field()
  id: string;

  @Field((type) => Int)
  timeSlot: number;

  @Field()
  meetingLink: string;

  @Field((type) => Date)
  date: Date;

  @Field()
  reasonToDecline: string;

  @Field()
  accepted: boolean;

  @Field()
  professorId: string;

  @Field((type) => Professor)
  professor: Professor;

  @Field()
  studentId: string;

  @Field((type) => Student)
  student: Student;

  @Field()
  classTypeId: string;

  @Field((type) => ClassType)
  classType: ClassType;

  @Field()
  gradeId: string;

  @Field((type) => Grade)
  grade: Grade;
}
