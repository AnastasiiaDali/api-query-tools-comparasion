import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import useGetUsersGraphQL from "../hooks/useGetUsersGraphQL";

export default function GraphQLPage() {
  const { users } = useGetUsersGraphQL();

  return (
    <>
      <h1>This is GraphGL page</h1>
      {users?.map((user) => (
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
