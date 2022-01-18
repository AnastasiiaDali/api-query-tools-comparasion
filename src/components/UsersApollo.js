import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
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

export default function UsersApollo() {
  const { data } = useQuery(FETCH_USERS, {
    // onCompleted: (data) => {},
  });

  return (
    <>
      {data?.usersCollection?.items?.map((user) => (
        <Box key={user.id}>
          <Button>
            {user.name}
            {user.email}
          </Button>
        </Box>
      ))}
    </>
  );
}
