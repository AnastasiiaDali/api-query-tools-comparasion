export const graphqlApollo = `import { useQuery, gql } from "@apollo/client";
const FETCH_USERS = gql\`
  query GetUsers {
    usersCollection {
      items {
        id
        name
        email
      }
    }
  }
\`;

export default function useGetUsersApollo() {
  const { data } = useQuery(FETCH_USERS);
  return { data };
}`;

export const graphql = `import { useState, useEffect } from "react";

  const accessToken = "uGkb1csX1uKsS84iz4lsBSniluiVWKgwgrqgZpU4m1I";
  const spaceId = "3z09v4hcrkbr";
  const query = \`
  {
      usersCollection {
        items {
          id
          name
          email
        }
      }
    }
  \`;
  
  export default function useGetUsersGraphQL() {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      fetch(
        \`https://graphql.contentful.com/content/v1/spaces/\${spaceId}/environments/master\`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: \`Bearer \${accessToken}\`,
          },
          body: JSON.stringify({
            query,
          }),
        }
      )
        .then((res) => res.json())
        .then((response) => {
          console.log(response);
          const { data } = response;
          setUsers(data.usersCollection.items);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  
    return { users };
  }
`;
export const reactQuery = `import { useQuery } from "react-query";
const accessToken = "uGkb1csX1uKsS84iz4lsBSniluiVWKgwgrqgZpU4m1I";
const spaceId = "3z09v4hcrkbr";

const fetchUsers = () =>
  fetch(\`https://cdn.contentful.com/spaces/\${spaceId}/entries?\${accessToken}\`, {
    headers: {
      Authorization: \`Bearer \${accessToken}\`,
    },
  });

export const useGetUsersReactQuery = () =>
useQuery("users", () => fetchUsers().then((response) => response.json()));
  `;
export const redux = `import { useEffect } from "react";
  import { useSelector, useDispatch } from "react-redux";
  import { usersLoading, usersReceived, usersError } from "../store/usersSlice";
  
  const accessToken = "uGkb1csX1uKsS84iz4lsBSniluiVWKgwgrqgZpU4m1I";
  const spaceId = "3z09v4hcrkbr";
  
  export function useGetUsersReduxThunk() {
    const users = useSelector((state) => state.users.users);
    const loading = useSelector((state) => state.users.loading);
    const error = useSelector((state) => state.users.error);
  
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(usersLoading(true));
  
      fetch(
        \`https://cdn.contentful.com/spaces/\${spaceId}/entries?\${accessToken}\`,
        {
          headers: {
            Authorization: \`Bearer \${accessToken}\`,
          },
        }
      )
        .then((res) => res.json())
        .then((response) => dispatch(usersReceived(response.items)))
        .catch((error) => dispatch(usersError(true)))
        .finally(() => dispatch(usersLoading(false)));
    }, [dispatch]);
  
    if (loading || error) <></>;
  
    return { users, loading, error };
  }
  `;
export const rtk = `
  import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const accessToken = "uGkb1csX1uKsS84iz4lsBSniluiVWKgwgrqgZpU4m1I";
const spaceId = "3z09v4hcrkbr";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: \`https://cdn.contentful.com/spaces/\${spaceId}/entries?\${accessToken}\`,
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: \`\`,
        method: "GET",
        headers: {
          Authorization: \`Bearer \${accessToken}\`,
        },
      }),
    }),
  }),
});

export const { useGetUsersQuery } = userApi;`;
