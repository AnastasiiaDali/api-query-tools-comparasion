import React from "react";
import Buttons from "../components/Buttons";
import InputToDo from "../components/InputToDo";
import UsersReactQuery from "../components/UsersReactQuery";

export default function ReactQueryPage() {
  return (
    <>
      <h1>This is React Query page</h1>
      <Buttons />
      <UsersReactQuery />
      <InputToDo />
    </>
  );
}
