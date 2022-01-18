import { createSlice } from "@reduxjs/toolkit";
import produce from "immer";

const initialState = {
  todos: ["cook", "wash dishes"],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addtodo(state, action) {
      const nextState = produce(state.todos, (draftState) => {
        state.todos.push(action.payload);
      });
      state.user = nextState;
    },
  },
});

export const { addtodo } = todoSlice.actions;

export default todoSlice.reducer;
