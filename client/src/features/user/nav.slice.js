import { createSlice } from "@reduxjs/toolkit";
import {
  registerSuccess,
  logginSuccess,
  editSuccess,
} from "../user/user.slice";

/*******    NAVIGATION PANNELS     *******/

// State
const initialState = {
  nav_SignIn: false,
  nav_SignUp: false,
  nav_Account: false,
  nav_EditToggle: false,
  nav_EditUsername: false,
  nav_EditMail: false,
  nav_EditPwd: false,
  nav_Delete: false,
  windows: {
    pannelUser_open: false,
    pannelCommand_open: false,
  },
};

// Slice
export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    toggleWindows: (state, action) => {
      // Open or close windows
      state.windows[`${action.payload}_open`] =
        !state.windows[`${action.payload}_open`];
    },
    navigate: (state, action) => {
      // Close other all pannels
      for (const [key, value] of Object.entries(state)) {
        console.log(key, value);
        if (value && key !== action.payload && key !== "windows") {
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
      // Close register pannel
      .addCase(registerSuccess, (state) => {
        state.nav_SignIn = false;
      })
      // Close loggin pannel
      .addCase(logginSuccess, (state) => {
        state.nav_SignUp = false;
      })
      .addCase(editSuccess, (state, action) => {
        state.nav_EditUsername = false;
        state.nav_EditMail = false;
        state.nav_EditPwd = false;
        state.nav_Account = true;
      });
  },
});

// Actions
export const { toggleWindows, navigate } = navSlice.actions;

// Reducer
export default navSlice.reducer;