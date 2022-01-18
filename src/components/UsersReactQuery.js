import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useUserQuery } from "../hooks/useUserQuery";

export default function UsersReactQuery() {
  const { data } = useUserQuery();

  return (
    <>
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
