import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

export default function Buttons() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
      <Button variant="contained" component={Link} to={"/graphql-apollo"}>
        GraphQL Apollo
      </Button>
      <Button variant="contained" component={Link} to={"/react-query"}>
        React Query
      </Button>
      <Button variant="contained" component={Link} to={"/graphgl"}>
        GrapgQL
      </Button>
      <Button variant="contained" component={Link} to={"/rtk"}>
        Redux RTK
      </Button>
      <Button variant="contained" component={Link} to={"/thunk"}>
        Redux Thunk
      </Button>
    </Box>
  );
}
