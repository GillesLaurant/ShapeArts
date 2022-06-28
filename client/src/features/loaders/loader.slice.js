import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setError } from "../error/error.slice";
import {
  registerSuccess,
  loggin,
  editUsername,
  editMail,
  editPwd,
  deleteAccount,
  logginSuccess,
} from "../user/user.slice";

const initialState = {
  register: false,
  loggin: false,
  editUsername: false,
  editMail: false,
  editPwd: false,
  deleteAccount: false,
  validShape: false,
};

export const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    toggleLoader: (state, action) => {
      state[action.payload] = !state[action.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setError, (state) => {
        for (const [key] of Object.entries(state)) {
          state[key] = false;
        }
      })
      // Register loader stop
      .addCase(registerSuccess, (state, action) => {
        state.register = false;
      })
      // Logginloader stop
      .addCase(logginSuccess, (state, action) => {
        state[action.payload] = false;
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

export const loaderButton = (state, nameButton) => {
  return state[nameButton];
};

export default loaderSlice.reducer;
