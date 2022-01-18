import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useGetUsersQuery } from "../hooks/useGetUsersRTK";

export default function RTKPage() {
  const { data } = useGetUsersQuery();

  return (
    <>
      <h1>This is Redux RTK page</h1>
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
    </>
  );
}
