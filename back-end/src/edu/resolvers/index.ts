import { FindClassResolver } from './queries/find-class.resolver';
import { ListClassTypeResolver } from './queries/list-class-type.resolver';
import { ListProfessorClassScheduleResolver } from './queries/list-professor-class-schedule.resolver';

export const Resolvers = [
  FindClassResolver,
  ListClassTypeResolver,
  ListProfessorClassScheduleResolver,
];
