import * as faker from 'faker';
import { v4 as uuidv4 } from 'uuid';
import { InsertProfessorOutput } from '@user/models';
import { Gender } from '@user/enums';
import { InsertProfessorInput } from '@user/input-types';

export const user = {
    id: uuidv4(),
    email: faker.internet.email(),
    firstName: "Professor Fulano",
    lastName: "Sobrenome do Fulano Professor",
    gender: Gender.MASCULINO,
    dateOfBirth: new Date("2021-05-17"),
    isActive: true,
    createdAt: new Date("2021-05-17T12:47:33.923Z"),
    updatedAt: new Date("2021-05-17T12:47:33.923Z"),
};

export const professor = {
    graduationLevel: 'pós graduação',
};

export const insertProfessorOutput: InsertProfessorOutput = {
    user: { ...user }
};

export const insertProfessorInput: InsertProfessorInput = {
    ...user,
    professor: {
        create: { ...professor }
    }
};