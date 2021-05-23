import { InsertStudentResolver } from './mutations/user/insert-student.resolver';
import { ListStudentResolver } from './queries/user/list-student.resolver';
import { ListProfessorResolver } from './queries/professor/list-professor.resolver';
import { InsertProfessorResolver } from './mutations/professor/insert-professor.resolver';

export const Resolvers = [
    InsertStudentResolver,
    ListStudentResolver,
    ListProfessorResolver,
    InsertProfessorResolver,
];
