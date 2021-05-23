import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../../src/app/app.module';
import { INestApplication } from '@nestjs/common';
import { user, professor, insertProfessorInput, insertProfessorOutput } from './professor';

const gql = '/graphql';

describe('Professor (e2e)', () => {
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
        describe('Professor', () => {
            it('Insert Professor', () => {
                const data = {
                    query: `
                      mutation ($input: InsertProfessorInput!){
                        insertProfessor(input: $input) {
                          user {
                            firstName
                            lastName
                          }
                        }
                      }
                    `,
                    variables: {
                        input: insertProfessorInput,
                    },
                };

                return request(app.getHttpServer())
                    .post(gql)
                    .send(data)
                    .expect(200)
                    .expect((res) => {
                        const { user } = insertProfessorOutput;
                        expect(res.body.data.insertProfessor).toEqual({
                            user: {
                                firstName: user.firstName,
                                lastName: user.lastName,
                            },
                        });
                    });
            });

            it('List Professor', () => {
                const data = {
                    query: `
                        query ($id: String!){
                            listProfessor(id: $id){
                                user {
                                    firstName
                                    lastName
                                    professor {
                                        graduationLevel
                                    }
                                }
                            }
                        }
                    `,
                    variables: {
                        id: insertProfessorOutput.user.id,
                    },
                };

                return request(app.getHttpServer())
                    .post(gql)
                    .send(data)
                    .expect(200)
                    .expect((res) => {
                        expect(res.body.data.listProfessor.user).toEqual({
                            firstName: user.firstName,
                            lastName: user.lastName,
                            professor: {
                                graduationLevel: professor.graduationLevel,
                            }
                        });
                    });
            });
        });
    });
});