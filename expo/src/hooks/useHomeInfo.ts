import { gql, useQuery } from '@apollo/client';

const PROF_QUERY = gql`
  {
    profs {
      userId
      userName
      icon
      prof
      loadMap
    }
  }
`;

export const useHomeInfo = () => {
  const { loading, error, data } = useQuery(PROF_QUERY);
  if (loading) return null;
  if (error) throw new Error(error.message);
  if (!data) throw new Error('There is no data');
  return { profs: data.profs };
};
