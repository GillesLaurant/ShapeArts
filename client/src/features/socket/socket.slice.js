import { createSlice } from "@reduxjs/toolkit";

/*******    SOCKET     *******/

// STATE
const initialState = {
  socket_connected: false,
  connectAttemps: 0,
};

// SLICE
export const socketSlice = createSlice({
  name: "socket",
  initialState,
  reducers: {
    connectSocket: (state) => {
      state.connectAttemps += 1;
    },
    successConnect: (state) => {
      state.socket_connected = true;
      state.connectAttemps = 0;
    },
    failedConnect: (state) => {
      state.socket_connected = false;
      state.connectAttemps = 0;
    },
  },
  extraReducers(builder) {},
});

// ACTIONS
export const { connectSocket, successConnect, failedConnect } =
  socketSlice.actions;

// REDUCER
export default socketSlice.reducer;
