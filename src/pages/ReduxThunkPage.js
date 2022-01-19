import React from "react";
import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";
import { useGetUsersReduxThunk } from "../hooks/useGetUsersReduxThunk";

export default function ReduxThunkPage() {
  const { users, loading, error } = useGetUsersReduxThunk();

  if (loading || error) <></>;
  return (
    <Box sx={{ margin: "30px 0 30px" }}>
      <Typography variant="h5" align="center" paragraph>
        This is Redux RTK page
      </Typography>
      {users?.map((user, id) => (
        <Box
          key={user.fields.id}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Typography>
            {user.fields.name}: {user.fields.email}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
