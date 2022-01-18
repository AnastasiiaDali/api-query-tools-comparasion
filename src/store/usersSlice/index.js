import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  loading: false,
  error: false,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    usersLoading(state, action) {
      state.loading = action.payload;
    },
    usersReceived(state, action) {
      state.users = action.payload;
    },
    usersError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { usersLoading, usersReceived, usersError } = usersSlice.actions;
export default usersSlice.reducer;
