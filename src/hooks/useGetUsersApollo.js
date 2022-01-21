import { useQuery, gql } from "@apollo/client";

const FETCH_USERS = gql`
  query GetUsers {
    usersCollection {
      items {
        id
        name
        email
      }
    }
  }
`;

export default function useGetUsersApollo() {
  const { data } = useQuery(FETCH_USERS);
  return { data };
}
