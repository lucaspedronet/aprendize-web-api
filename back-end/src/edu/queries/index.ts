export { FindClassQuery } from './find-class.query';
export { ListClassTypeQuery } from './list-class-type.query';
export { ListProfessorClassScheduleQuery } from './list-professor-class-schedule.query';

import { FindClassHandler } from './find-class.handler';
import { ListClassTypeHandler } from './list-class-type.handler';
import { ListProfessorClassScheduleHandler } from './list-professor-class-schedule.handler';

export const QueriesHandlers = [
  FindClassHandler,
  ListClassTypeHandler,
  ListProfessorClassScheduleHandler,
];
