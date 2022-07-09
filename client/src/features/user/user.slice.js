import { createSlice } from "@reduxjs/toolkit";
import { createTiming } from "../PannelShape/shape.slice";
import { navigate } from "./nav.slice";

/*******    USER     *******/

// State
const initialState = {
  id: -1,
  username: "",
  mail: "",
  password: "",
  countShapes: 0,
  usernameEdited: "",
  mailEdited: "",
  holdPwd: "",
  newPwd: "",
  isLoggin: false,
  successPWDEdited: false,
};

// Slice
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Input controll
    changeFields: (state, action) => {
      state[action.payload.name] = action.payload.value;
    },
    // Register actions
    register: () => {},
    registerSuccess: (state, action) => {
      state.password = "";
      state.isLoggin = true;
      state.id = action.payload.id;
    },
    // Loggin actions
    loggin: () => {},
    logginSuccess: (state, action) => {
      state.password = "";
      state.isLoggin = true;
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.countShapes = action.payload.counterShapes;
    },
    // Loggout actions
    loggout: () => {},
    loggoutSuccess: (state) => {
      state.id = -1;
      state.username = "";
      state.mail = "";
      state.password = "";
      state.countShapes = 0;
      state.isLoggin = false;
    },
    // Delete actions
    deleteAccount: () => {},
    deleteSuccess: (state) => {
      state.id = -1;
      state.username = "";
      state.mail = "";
      state.password = "";
      state.countShapes = 0;
      state.isLoggin = false;
    },
    // Edit actions
    edit: () => {},
    editSuccess: (state, action) => {
      // Success edit username || mail
      if (action.payload.newEdited !== "pwd") {
        state[action.payload.newEdited] = state[action.payload.resetEdited];
        state[action.payload.resetEdited] = "";
      }
      // Success edit password
      else {
        state.successPWDEdited = true;
        state.holdPwd = "";
        state.newPwd = "";
      }
    },
  },
  extraReducers: (builder) => {
    // On back edit
    builder
      .addCase(navigate, (state, action) => {
        if (
          action.payload === "nav_EditUsername" ||
          action.payload === "nav_EditMail" ||
          action.payload === "nav_EditPwd"
        ) {
          state.usernameEdited = "";
          state.mailEdited = "";
          state.holdPwd = "";
          state.newPwd = "";
        }
        if (state.successPWDEdited) {
          state.successPWDEdited = false;
        }
      })
      .addCase(createTiming, (state) => {
        state.countShapes += 1;
      });
  },
});

// Actions
export const {
  changeFields,
  register,
  registerSuccess,
  loggin,
  logginSuccess,
  loggout,
  loggoutSuccess,
  deleteAccount,
  deleteSuccess,
  edit,
  editSuccess,
} = userSlice.actions;

// Reducer
export default userSlice.reducer;
