import React from "react";
import Buttons from "../components/Buttons";
import InputToDo from "../components/InputToDo";
import UsersApollo from "../components/UsersApollo";

export default function GraphQLApolloPage() {
  return (
    <>
      <h1>This is Graph QL Apollo page</h1>
      <Buttons />
      <UsersApollo />
      <InputToDo />
    </>
  );
}
