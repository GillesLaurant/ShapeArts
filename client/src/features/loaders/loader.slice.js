import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  register,
  loggin,
  editUsername,
  editMail,
  editPwd,
  deleteAccount,
} from "../user/user.slice";

const initialState = {};

export const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    toggleLoader: (state, action) => {
      state[action.payload.name] = action.payload.value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register, (state, action) => {
        console.log(action.type);
        state[action.payload] = true;
      })
      .addCase(loggin, (state, action) => {
        state[action.payload] = true;
      })
      .addCase(editUsername, (state, action) => {
        state[action.payload] = true;
      })
      .addCase(editMail, (state, action) => {
        state[action.payload] = true;
      })
      .addCase(editPwd, (state, action) => {
        state[action.payload] = true;
      })
      .addCase(deleteAccount, (state, action) => {
        state[action.payload] = true;
      });
  },
});

export const { toggleLoader } = loaderSlice.actions;

export default loaderSlice.reducer;
