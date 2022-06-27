import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { io } from "socket.io-client";
// import socketAPI from "./socketAPI";
/*******    SOCKET     *******/

const initialState = {
  socket: null,
  status: "idle",
  error: null,
};

// export const connectSocket = createAsyncThunk(
//   "socket/connectSocket",
//   async () => {
//     try {
//       const socket = new socketAPI();
//       socket.connect();
//       return socket;
//     } catch (error) {
//       console.log("errorSocket", error);
//     }
//   }
// );

export const socketSlice = createSlice({
  name: "socket",
  initialState,
  reducers: {
    connectSocket: (state) => {
      state.status = "loading";
      //   state.content.push(action.payload.cloth);
      console.log("z", state);
      //   state.error = "test";
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

export const { connectSocket } = socketSlice.actions;

export default socketSlice.reducer;
