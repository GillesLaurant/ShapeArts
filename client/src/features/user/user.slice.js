import { createSlice } from "@reduxjs/toolkit";
import { navigate } from "./nav.slice";

/*******    USER     *******/

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
    loggout: () => {},
    loggoutSuccess: (state, action) => {
      state.password = "";
      state.isLoggin = false;
      state.id = -1;
      state.username = "";
      state.mail = "";

      state.countShapes = 0;
    },
    delete: () => {},
    deleteSuccess: (state, action) => {
      state.password = "";
      state.isLoggin = false;
      state.id = -1;
      state.username = "";
      state.countShapes = 0;
    },
    editUsername: (state, action) => {
      state.username = state.usernameEdited;
      state.usernameEdited = "";
    },
    editMail: (state, action) => {
      state.mail = state.mailEdited;
      state.mailEdited = "";
    },
    editPwd: (state, action) => {
      state.holdPwd = "";
      state.newPwd = "";
    },
    deleteAccount: (state, action) => {
      console.log("delete");
    },
    // registerSuccess: (state, action) => {
    //   for (const item of state) {
    //     console.log(item);
    //   }
    //   state.id = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(navigate, (state, action) => {
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
    });
  },
});

export const {
  changeFields,
  register,
  loggin,
  logginSuccess,
  loggout,
  loggoutSuccess,
  editUsername,
  editMail,
  editPwd,
  deleteAccount,
  registerSuccess,
} = userSlice.actions;

export default userSlice.reducer;
