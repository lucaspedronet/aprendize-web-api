import { InsertStudentResolver } from './mutations/user/insert-student.resolver';
import { ListStudentResolver } from './queries/user/list-student.resolver';

export const Resolvers = [
    InsertStudentResolver,
    ListStudentResolver
];
