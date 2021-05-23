import * as faker from 'faker';
import { v4 as uuidv4 } from 'uuid';
import { InsertStudentOutput } from '@user/models';
import { InsertStudentInput, Gender } from '@user/input-types';

export const user = {
    id: uuidv4(),
    email: faker.internet.email(),
    firstName: "Fulano",
    lastName: "Sobrenome do Fulano",
    gender: Gender.MASCULINO,
    dateOfBirth: new Date("2021-05-17"),
    isActive: true,
    createdAt: new Date("2021-05-17T12:47:33.923Z"),
    updatedAt: new Date("2021-05-17T12:47:33.923Z"),
};

export const student = {
    grade: 'fundamental',
    fathersName: 'Pai Fulano',
    mothersName: 'Mãe Fulana',
    parentEmail: faker.internet.email(),
    createdAt: new Date("2021-05-17T12:47:33.923Z"),
    updatedAt: new Date("2021-05-17T12:47:33.923Z"),
};

export const insertStudentOutput: InsertStudentOutput = {
    user: { ...user }
};

export const insertStudentInput: InsertStudentInput = {
    ...user,
    student: {
        create: { ...student }
    }
};