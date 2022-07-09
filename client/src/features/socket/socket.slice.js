import { createSlice } from "@reduxjs/toolkit";

/*******    SOCKET     *******/

// STATE
const initialState = {
  socket_connected: false,
};

// SLICE
export const socketSlice = createSlice({
  name: "socket",
  initialState,
  reducers: {
    // Start action
    connectSocket: () => {},
    // Success connect server
    successConnect: (state) => {
      state.socket_connected = true;
    },
    // Error connect server
    failedConnect: (state) => {
      state.socket_connected = false;
    },
  },
});

// ACTIONS
export const { connectSocket, successConnect, failedConnect } =
  socketSlice.actions;

// REDUCER
export default socketSlice.reducer;
