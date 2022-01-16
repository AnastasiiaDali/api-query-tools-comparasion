import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Buttons() {
  return (
    <>
      <Button component={Link} to={"/rtk"}>
        RTK
      </Button>
      <Button component={Link} to={"/react-query"}>
        React Query
      </Button>
      <Button component={Link} to={"/graphgl"}>
        GrapgQL
      </Button>
    </>
  );
}
