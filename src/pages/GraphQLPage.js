import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import useGetUsersGraphQL from "../hooks/useGetUsersGraphQL";

export default function GraphQLPage() {
  const { users } = useGetUsersGraphQL();

  return (
    <Box sx={{ margin: "30px 0 30px" }}>
      <Typography variant="h5" align="center" paragraph>
        This is GraphGL page
      </Typography>
      {users?.map((user) => (
        <Box key={user.id} sx={{ display: "flex", justifyContent: "center" }}>
          <Typography>
            {user.name}: {user.email}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
