import { gql, useQuery } from "@apollo/client"

const PROF_QUERY = gql`
  {
    prof(userId: gP7iuk5a5hSIoZAMLdjozeGq93K3){
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
  if (error) return new Error('error');
  if (!data) return new Error('There is no data');
  return {prof: data.prof}
}