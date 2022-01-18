import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import useGetUsersApollo from "../hooks/useGetUsersApollo";

export default function GraphQLApolloPage() {
  const { data } = useGetUsersApollo();
  return (
    <>
      <h1>This is Graph QL Apollo page</h1>
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
