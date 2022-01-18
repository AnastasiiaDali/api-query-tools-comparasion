import React from "react";
import Buttons from "../components/Buttons";
import InputToDo from "../components/InputToDo";
import UsersGraphQL from "../components/UsersGraphQL";

export default function GraphQLPage() {
  return (
    <>
      <h1>This is GraphGL page</h1>
      <Buttons />
      <UsersGraphQL />
      <InputToDo />
    </>
  );
}
