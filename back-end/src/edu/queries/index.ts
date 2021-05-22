export { FindClassQuery } from './find-class.query';
export { ListClassTypeQuery } from './list-class-type.query';

import { FindClassHandler } from './find-class.handler';
import { ListClassTypeHandler } from './list-class-type.handler';

export const QueriesHandlers = [FindClassHandler, ListClassTypeHandler];
