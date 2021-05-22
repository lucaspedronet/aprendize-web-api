import { Field, ObjectType } from '@nestjs/graphql';
import { Expertise, ClassSchedule } from '@edu/models';

@ObjectType()
export class Grade {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field((type) => Expertise, { nullable: true })
  expertise: Expertise;

  @Field((type) => ClassSchedule, { nullable: true })
  classSchedule: ClassSchedule;
}
