export { ListStudentQuery } from './list-student.query';
export { ListProfessorQuery } from './list-professor.query';

import { ListStudentHandler } from './list-student.handler';
import { ListProfessorHandler } from './list-professor.handler';

export const QueriesHandlers = [
    ListStudentHandler,
    ListProfessorHandler,
];
