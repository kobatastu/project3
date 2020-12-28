import { gql, useQuery } from '@apollo/client';

const PROF_QUERY = gql`
  {
    prof(userId: "1"){
      userId
      userName
      icon
      prof
      loadMap
    }
  }
`;

export const useProfInfo = () => {
  const { loading, error, data } = useQuery(PROF_QUERY);
  if (loading) return null;
  if (error) throw new Error(error.message);
  if (!data) throw new Error('There is no data');
  return { prof: data.prof };
};
