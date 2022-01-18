import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtodo } from "../store/todoSlice";

import Input from "@mui/material/Input";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";

export default function InputToDo() {
  const [todo, setTodo] = useState("");
  const [value, setValue] = useState("");
  const todoList = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const handleAddToDo = (todo) => {
    dispatch(addtodo(todo));
    console.log(todo);
    setValue("");
  };

  return (
    <>
      <Input
        label="TODO"
        variant="filled"
        sx={{ display: "block" }}
        value={value}
        onInput={(e) => {
          setTodo(e.target.value);
          setValue(e.target.value);
          console.log("event", e.target.value);
          console.log("value", value);
        }}
      />
      <Button onClick={() => handleAddToDo(todo)}>Add todo</Button>
      <List>
        {todoList?.map((item, i) => (
          <ListItem key={i}>{item}</ListItem>
        ))}
      </List>
    </>
  );
}
