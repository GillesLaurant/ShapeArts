import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { changeFields } from "../user/user.slice";
import { navigate } from "../user/nav.slice";
const PWD_REGEX = /^[A-Za-z0-9_-]{4,15}$/;
const USERNAME_REGEX = /^[A-Za-z0-9_-]{3,15}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

/*******    ERROR     *******/

// State
const initialState = {
  error: {
    username: false,
    mail: false,
    password: false,
    usernameEdited: false,
    mailEdited: false,
    holdPwd: false,
    newPwd: false,
  },
  errorMsg: {},
  // List error messages for inputs
  listMsg: {
    username: "Veuillez entrer un pseudo entre 3 et 15 charactères.",
    usernameEdited: "Veuillez entrer un pseudo entre 3 et 15 charactères.",
    mail: "Veuillez entrer une adresse mail valide.",
    mailEdited: "Veuillez entrer une adresse mail valide.",
    password: "Doit contenir entre 4 et 15 charactères.",
    holdPwd: "Doit contenir entre 4 et 15 charactères.",
    newPwd: "Doit contenir entre 4 et 15 charactères.",
  },
};

// Slice
export const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    // Set errors
    setError: (state, action) => {
      state.error[action.payload.nameError] = true;
      state.errorMsg[action.payload.nameError] = action.payload.msgError;
    },
    registerError: (state, action) => {
      for (const item of state) {
        console.log(item);
      }
      state.id = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Navigate reset all errors
    builder
      .addCase(navigate, (state) => {
        for (const item in state.error) {
          state.error[item] = false;
        }
        state.errorMsg = {};
      })

      // Change inputs errors
      .addCase(changeFields, (state, action) => {
        const input = action.payload.name;
        const value = action.payload.value;

        switch (input) {
          case "username":
          case "usernameEdited":
            state.error[input] = !USERNAME_REGEX.test(value) ? true : false;
            state.errorMsg[input] = !USERNAME_REGEX.test(value)
              ? state.listMsg.username
              : null;

            break;
          case "mail":
          case "mailEdited":
            state.error[input] = !EMAIL_REGEX.test(value) ? true : false;
            state.errorMsg[input] = !EMAIL_REGEX.test(value)
              ? state.listMsg.mail
              : null;

            break;
          case "password":
          case "holdPwd":
          case "newPwd":
            state.error[input] = !PWD_REGEX.test(value) ? true : false;
            state.errorMsg[input] = !PWD_REGEX.test(value)
              ? state.listMsg.password
              : null;

            break;

          default:
            break;
        }
      });
  },
});

// Actions
export const { setError, registerError } = errorSlice.actions;

// Reducer
export default errorSlice.reducer;
