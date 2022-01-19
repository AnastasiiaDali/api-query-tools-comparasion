import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import useGetUsersApollo from "../hooks/useGetUsersApollo";

export default function GraphQLApolloPage() {
  const { data } = useGetUsersApollo();
  return (
    <Box sx={{ margin: "30px 0 30px" }}>
      <Typography variant="h5" align="center" paragraph>
        This is Graph QL Apollo page
      </Typography>
      {data?.usersCollection?.items?.map((user) => (
        <Box key={user.id} sx={{ display: "flex", justifyContent: "center" }}>
          <Typography>
            {user.name}: {user.email}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
