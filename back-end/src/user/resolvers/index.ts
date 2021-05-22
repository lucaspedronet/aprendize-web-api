import { InsertUserResolver } from './mutations/user/insert-user.resolver';
import { ListUserResolver } from './queries/user/list-user.resolver';

export const Resolvers = [InsertUserResolver, ListUserResolver];
