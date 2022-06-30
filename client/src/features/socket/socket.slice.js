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
    successConnect: (state, action) => {
      state.socket_connected = true;
      state.connectAttemps = 0;
    },
  },
  extraReducers(builder) {
    // builder
    // .addCase(connectSocket.pending, (state, action) => {
    //   console.log(state);
    //   state.status = action.meta.requestStatus;
    //   // state.status.push(action.payload.cloth);
    // })
    // .addCase(connectSocket.fulfilled, (state, action) => {
    //   console.log(action);
    //   state.status = action.meta.requestStatus;
    //   state.socket = true;
    // });
  },
});

// ACTIONS
export const { connectSocket, successConnect } = socketSlice.actions;

// REDUCER
export default socketSlice.reducer;
