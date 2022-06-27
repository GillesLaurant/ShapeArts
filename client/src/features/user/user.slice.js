import { createSlice } from "@reduxjs/toolkit";

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
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeFields: (state, action) => {
      state[action.payload.name] = action.payload.value;
    },
    register: (state, action) => {
      console.log(action);
      state.id = 7;
    },
    loggin: (state, action) => {
      state.id = 7;
      console.log(action);
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
    registerSuccess: (state, action) => {
      for (const item of state) {
        console.log(item);
      }
      state.id = action.payload;
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(register, )
  },
});

export const {
  changeFields,
  register,
  loggin,
  editUsername,
  editMail,
  editPwd,
  deleteAccount,
  registerSuccess,
} = userSlice.actions;

export default userSlice.reducer;
