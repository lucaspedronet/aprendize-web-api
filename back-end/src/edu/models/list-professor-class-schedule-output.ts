import { Field, ObjectType } from '@nestjs/graphql';
import { ClassSchedule } from './class-schedule';

@ObjectType()
export class ListProfessorClassScheduleOutput {
  @Field({ nullable: true })
  success: boolean;

  @Field({ nullable: true })
  message: string;

  @Field((type) => ClassSchedule)
  classSchedule: [ClassSchedule];
}
