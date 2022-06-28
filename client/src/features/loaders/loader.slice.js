import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setError } from "../error/error.slice";
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
  register: false,
  loggin: false,
  editUsername: false,
  editMail: false,
  editPwd: false,
  deleteAccount: false,
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
      // IF error stop loader
      .addCase(setError, (state) => {
        for (const [key] of Object.entries(state)) {
          state[key] = false;
        }
      })
      // Register loader stop
      .addCase(registerSuccess, (state, action) => {
        state.register = false;
      })
      // Loggin loader stop
      .addCase(logginSuccess, (state, action) => {
        state.loggin = false;
      })
      // Loggout loader stop
      .addCase(loggoutSuccess, (state, action) => {
        state.loggout = false;
      })
      // Delete loader stop
      .addCase(deleteSuccess, (state, action) => {
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
      });
  },
});

// Actions
export const { toggleLoader } = loaderSlice.actions;

export const loaderButton = (state, nameButton) => {
  return state[nameButton];
};

// Reducer
export default loaderSlice.reducer;
