import { comments } from '../infra/store';

export const resolvers = {
  Query: {
    comments: () => comments,
  },
};
