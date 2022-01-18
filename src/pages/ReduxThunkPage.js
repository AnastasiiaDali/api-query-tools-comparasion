import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useGetUsersReduxThunk } from "../hooks/useGetUsersReduxThunk";

export default function ReduxThunkPage() {
  const { users, loading, error } = useGetUsersReduxThunk();

  if (loading || error) <></>;
  return (
    <>
      <h1>This is Redux RTK page</h1>
      {users?.map((user, id) => (
        <Box key={id}>
          <Button>{user.fields.name}</Button>
          <Button>{user.fields.email}</Button>
        </Box>
      ))}
    </>
  );
}
