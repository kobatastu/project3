import { gql, useQuery } from "@apollo/client"

const COMMENT_QUERY = gql`
  {
    comments {
      id
      comment
    }
  }
`;

export const useHomeInfo = () => {
  const { loading, error, data } = useQuery(COMMENT_QUERY);
  if (loading) return null;
  if (error) return new Error('error');
  if (!data) return new Error('There is no data');
  return {comments: data.comments}
}