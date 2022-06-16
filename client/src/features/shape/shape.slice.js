import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "round",
  pos_X: 450,
  pos_Y: 350,
  size: 1.5,
  rotation: 0,
  opacity: 100,
  color_primary: "#EEEEE",
  color_secondary: "#EEEEE",
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
// export const incrementAsync = createAsyncThunk(
//   'counter/fetchCount',
//   async (amount) => {
//     const response = await fetchCount(amount);
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );

export const shapeSlice = createSlice({
  name: "shape",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    selectShape: (state, action) => {
      // User select "Round" || "Square" || "Triangle" || "Star"
      state.name = action.payload;
    },
    toggleLayout: (state, action) => {
      console.log(action);
      if (
        action.payload.op === "add" &&
        state.pos_X < 904 &&
        state.pos_Y < 709
      ) {
        state[action.payload.pos] += 1;
      } else if (
        action.payload.op === "sub" &&
        state.pos_X > -20 &&
        state.pos_Y > -20
      ) {
        state[action.payload.pos] -= 1;
      }
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    // builder
    //   .addCase(incrementAsync.pending, (state) => {
    //     state.status = 'loading';
    //   })
    //   .addCase(incrementAsync.fulfilled, (state, action) => {
    //     state.status = 'idle';
    //     state.value += action.payload;
    //   });
  },
});

export const { selectShape, toggleLayout, incrementByAmount } =
  shapeSlice.actions;

export const shapeState = (state) => state.shape;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd = (amount) => (dispatch, getState) => {
//   const currentValue = selectCount(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };

export default shapeSlice.reducer;
