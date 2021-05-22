import { InputType, Field, registerEnumType } from '@nestjs/graphql';

enum Gender {
  FEMININO = 'FEMININO',
  MASCULINO = 'MASCULINO',
  SEM_GENERO = 'SEM_GENERO',
}

registerEnumType(Gender, {
  name: 'Gender',
});

@InputType()
export class InsertUserInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field((type) => Gender)
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
  deletedAt: Date;
}
