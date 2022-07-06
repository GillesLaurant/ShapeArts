import { createSlice } from "@reduxjs/toolkit";
import { addShape, getCloth } from "../cloth/cloth.slice";
import { setError } from "../error/error.slice";
import { rememberTiming } from "../PannelShape/shape.slice";
import {
  registerSuccess,
  logginSuccess,
  loggoutSuccess,
  deleteSuccess,
  editSuccess,
} from "../user/user.slice";

/*******    LOADER     *******/

// State
const initialState = {
  cloth: true,
  register: false,
  loggin: false,
  loggout: false,
  deleteAccount: false,
  editUsername: false,
  editMail: false,
  editPwd: false,
  validShape: false,
};

// Slice
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
      // Receiv cloth
      .addCase(getCloth, (state) => {
        state.cloth = false;
      })
      // IF error stop loader
      .addCase(setError, (state) => {
        for (const [key] of Object.entries(state)) {
          if (key !== "cloth") {
            state[key] = false;
          }
        }
      })
      // Register loader stop
      .addCase(registerSuccess, (state) => {
        state.register = false;
      })
      // Loggin loader stop
      .addCase(logginSuccess, (state) => {
        state.loggin = false;
      })
      // Loggout loader stop
      .addCase(loggoutSuccess, (state) => {
        state.loggout = false;
      })
      // Delete loader stop
      .addCase(deleteSuccess, (state) => {
        state.deleteAccount = false;
      })
      // All edits loader stop
      .addCase(editSuccess, (state, action) => {
        switch (action.payload.newEdited) {
          case "username":
            state.editUsername = false;
            break;

          case "mail":
            state.editMail = false;
            break;

          case "pwd":
            state.editPwd = false;
            break;

          default:
            break;
        }
      })
      // Valid shape loader stop
      .addCase(addShape || rememberTiming, (state) => {
        state.validShape = false;
      });
  },
});

// Actions
export const { toggleLoader } = loaderSlice.actions;

// Reducer
export default loaderSlice.reducer;
