import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  user: {
    username: "",
    password: "",
    name: "",
  },
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
    changeUserName: (state, action) => {
      state.user.name = action.payload;
    },
  },
});
