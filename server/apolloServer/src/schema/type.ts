import { gql } from 'apollo-server';

export const type = gql`
  type Comment {
    id: ID
    title: String
    comment: String
  }

  type Query {
    comments: [Comment]
  }
`