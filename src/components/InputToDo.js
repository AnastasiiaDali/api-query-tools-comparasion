import React from "react";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";

export default function InputToDo() {



  
  return (
    <>
      <TextField
        id="filled-basic"
        label="TODO"
        variant="filled"
        sx={{ display: "block" }}
      />
      <Button onClick={() => handleAddToDo()}>Add todo</Button>
      <List>
        <ListItem>cook</ListItem>
        <ListItem>wash dishes</ListItem>
      </List>
    </>
  );
}
