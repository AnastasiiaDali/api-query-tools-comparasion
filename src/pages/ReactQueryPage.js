import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useGetUsersReactQuery } from "../hooks/useGetUsersReactQuery";

export default function ReactQueryPage() {
  const { data } = useGetUsersReactQuery();

  return (
    <Box sx={{ margin: "30px 0 30px" }}>
      <Typography variant="h5" align="center" paragraph>
        This is React Query page
      </Typography>
      {data?.items?.map((user) => (
        <Box key={user.id} sx={{ display: "flex", justifyContent: "center" }}>
          <Typography>
            {user.fields.name}: {user.fields.email}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
