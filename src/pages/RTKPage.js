import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useGetUsersQuery } from "../hooks/useGetUsersRTK";

export default function RTKPage() {
  const { data } = useGetUsersQuery();

  return (
    <Box sx={{ margin: "30px 0 30px" }}>
      <Typography variant="h5" align="center" paragraph>
        This is Redux RTK page
      </Typography>
      {data?.items?.map((user) => (
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
