import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useGetUsersReactQuery } from "../hooks/useGetUsersReactQuery";

export default function ReactQueryPage() {
  const { data } = useGetUsersReactQuery();

  return (
    <>
      <h1>This is React Query page</h1>
      {data?.items?.map((user) => (
        <Box key={user.fields.id}>
          <Button>
            {user.fields.name}
            {user.fields.email}
          </Button>
        </Box>
      ))}
    </>
  );
}
