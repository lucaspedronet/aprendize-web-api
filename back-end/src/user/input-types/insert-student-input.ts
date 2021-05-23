import { InputType, Field, registerEnumType } from '@nestjs/graphql';
import {StudentCreateNestedOneWithoutUserInput} from './student-create-nested-one-without-user-input'

export enum Gender {
  FEMININO = 'FEMININO',
  MASCULINO = 'MASCULINO',
  SEM_GENERO = 'SEM_GENERO',
}

registerEnumType(Gender, {
  name: 'Gender',
});

@InputType()
export class InsertStudentInput {
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
  dateOfBirth: Date;

  @Field()
  isActive: boolean;

  @Field((type) => Date)
  createdAt: Date;

  @Field((type) => Date)
  updatedAt: Date;

  @Field((type) => Date, { nullable: true })
  deletedAt?: Date;

  @Field((type) => StudentCreateNestedOneWithoutUserInput)
  student: StudentCreateNestedOneWithoutUserInput;
}
