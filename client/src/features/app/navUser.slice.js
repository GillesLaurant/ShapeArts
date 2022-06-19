import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  register,
  loggin,
  editUsername,
  editMail,
  editPwd,
} from "./user.slice";

// NAVIGATION USER PANNELS

const initialState = {
  nav_SignIn: false,
  nav_SignUp: false,
  nav_Account: false,
  nav_EditToggle: false,
  nav_EditUsername: false,
  nav_EditMail: false,
  nav_EditPwd: false,
  nav_Delete: false,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    navigate: (state, action) => {
      // Close other all pannels
      for (const [key, value] of Object.entries(state)) {
        if (value && key !== action.payload) {
          state[key] = false;
        }
      }
      // Else if user is in Account
      if (
        (action.payload === "nav_EditToggle" ||
          action.payload === "nav_EditUsername" ||
          action.payload === "nav_EditMail" ||
          action.payload === "nav_EditPwd" ||
          action.payload === "nav_Delete") &&
        (state.nav_EditToggle ||
          state.nav_EditUsername ||
          state.nav_EditMail ||
          state.nav_EditPwd ||
          state.nav_Delete)
      ) {
        // For return Account must is TRUE
        state.nav_Account = true;
      }
      state[action.payload] = !state[action.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register, (state, action) => {
        state.nav_SignIn = false;
      })
      .addCase(loggin, (state, action) => {
        state.nav_SignUp = false;
      })
      .addCase(editUsername, (state, action) => {
        state.nav_EditUsername = false;
        state.nav_Account = true;
      })
      .addCase(editMail, (state, action) => {
        state.nav_EditMail = false;
        state.nav_Account = true;
      })
      .addCase(editPwd, (state, action) => {
        state.nav_EditPwd = false;
        state.nav_Account = true;
      });
  },
});

export const { navigate } = navSlice.actions;

export default navSlice.reducer;
