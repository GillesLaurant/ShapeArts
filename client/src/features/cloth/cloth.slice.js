import { createSlice } from "@reduxjs/toolkit";
/*******    CLOTH     *******/

const initialState = {
  content: [],
  newShape: false,
  error: null,
  count: 0,
};

export const clothSlice = createSlice({
  name: "cloth",
  initialState,
  reducers: {
    getCloth: (state, action) => {
      state.content = action.payload.cloth;
      state.count = action.payload.count;
      state.newShape = action.payload.newShape;
      console.log(action);
    },
  },
  extraReducers(builder) {
    // builder
    // .addCase(requestCloth.pending, (state, action) => {
    //   console.log("pending", action);
    //   state.status = action.meta.requestStatus;
    //   // state.status.push(action.payload.cloth);
    // })
  },
});

export const { getCloth } = clothSlice.actions;

export default clothSlice.reducer;
