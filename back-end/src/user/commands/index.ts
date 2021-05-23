export { InsertStudentCommand } from './insert-student.command';
export { InsertProfessorCommand } from './insert-professor.command';

import { InsertStudentHandler } from './insert-student.handler';
import { InsertProfessorHandler } from './insert-professor.handler';

export const CommandHandlers = [
    InsertStudentHandler,
    InsertProfessorHandler,
];
