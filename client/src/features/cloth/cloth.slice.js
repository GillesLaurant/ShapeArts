import { createSlice } from "@reduxjs/toolkit";

/*******    CLOTH     *******/

// State
const initialState = {
  cloth_id: -1,
  content: [],
  newShape: false,
  error: null,
  count: 0,
};

// Slice
export const clothSlice = createSlice({
  name: "cloth",
  initialState,
  reducers: {
    // Receiv start cloth
    getCloth: (state, action) => {
      state.cloth_id = action.payload.clothId;
      state.content = action.payload.cloth;
      state.count = action.payload.count;
      state.newShape = action.payload.newShape;
    },
    // Receiv new cloth
    addShape: (state, action) => {
      state.content = action.payload.cloth;
      state.count = action.payload.count;
      state.newShape = true;
    },
  },
});

// Actions
export const { getCloth, addShape } = clothSlice.actions;

// Reducer
export default clothSlice.reducer;
