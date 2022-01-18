import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Buttons() {
  return (
    <>
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
    </>
  );
}
