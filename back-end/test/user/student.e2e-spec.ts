import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../../src/app/app.module';
import { INestApplication } from '@nestjs/common';
import { user, student, insertStudentInput, insertStudentOutput } from './student';

const gql = '/graphql';

describe('Student (e2e)', () => {
    let app: INestApplication;

    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    afterAll(async () => {
        await app.close();
    });

    describe(gql, () => {
        describe('Student', () => {
            it('Insert Student', () => {
                const data = {
                    query: `
                      mutation ($input: InsertStudentInput!){
                        insertStudent(input: $input) {
                          user {
                            firstName
                            lastName
                          }
                        }
                      }
                    `,
                    variables: {
                        input: insertStudentInput,
                    },
                };

                return request(app.getHttpServer())
                    .post(gql)
                    .send(data)
                    .expect(200)
                    .expect((res) => {
                        expect(res.body.data.insertStudent).toEqual({
                            user: {
                                firstName: user.firstName,
                                lastName: user.lastName,
                            },
                        });
                    });
            });
            it('List Student', () => {
                const data = {
                    query: `
                        query ($id: String!){
                            listStudent(id: $id){
                                user {
                                    firstName
                                    lastName
                                    student {
                                        fathersName
                                        mothersName
                                    }
                                }
                            }
                        }
                    `,
                    variables: {
                        id: insertStudentOutput.user.id,
                    },
                };

                return request(app.getHttpServer())
                    .post(gql)
                    .send(data)
                    .expect(200)
                    .expect((res) => {
                        expect(res.body.data.listStudent.user).toEqual({
                            firstName: user.firstName,
                            lastName: user.lastName,
                            student: {
                                fathersName: student.fathersName,
                                mothersName: student.mothersName,
                            }
                        });
                    });
            });
        });
    });
});