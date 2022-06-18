import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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
      console.log(action);
      state[action.payload] = !state[action.payload];
    },
  },
  extraReducers: (builder) => {},
});

export const { navigate } = navSlice.actions;

export default navSlice.reducer;
