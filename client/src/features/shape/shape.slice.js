import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

/*******     SHAPE     *******/

const initialState = {
  //  CONFIG SHAPE
  name: "round",
  pos_X: 450,
  pos_Y: 350,
  size: 10,
  rotation: 0,
  rotation_X: 0,
  rotation_Y: 0,
  // CONFIG COLOR
  color_primary: "#164e80",
  color_secondary: "#FD4E83",
  // TOGGLE NORMAL || GRADIENT
  selector_gradient: false,
  // TOGGLE LINEAR || RADIAL
  selector_linear: true,
  // OREINTATION LINEAR
  gradient_orientation: 0,
  // RAYON RADIAL
  gradient_rayon: 1,
  // GRADIENT OPACITYS
  primary_opacity: 1,
  secondary_opacity: 1,
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
  reducers: {
    // Toggle shape position with mouse event
    togglePosition: (state, action) => {
      state.pos_X = action.payload.posX;
      state.pos_Y = action.payload.posY;
    },
    // Input select "Round" || "Square" || "Triangle" || "Star"
    selectShape: (state, action) => {
      state.name = action.payload;
    },
    // Input toggle X < -20 - 903 > Y < -20 - 709 >
    toggleLayout: (state, action) => {
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
    // Ranges "pos_Z" ||" size" || "rotation" || "rotation_X" || "opacity" || "colors"
    toggleDisplay: (state, action) => {
      if (
        action.payload.name === "color_primary" ||
        action.payload.name === "color_secondary"
      ) {
        state[action.payload.name] = action.payload.value;
      } else {
        state[action.payload.name] = parseFloat(action.payload.value);
      }
    },
    // Input toggle color "normal" || "gradient"
    toggleGradient: (state) => {
      state.selector_gradient = !state.selector_gradient;
    },
    toggleGradientType: (state) => {
      state.selector_linear = !state.selector_linear;
    },
    resetShape: (state) => {
      state.name = "round";
      state.pos_X = 450;
      state.pos_Y = 350;
      state.size = 10;
      state.rotation = 0;
      state.rotation_X = 0;
      state.rotation_Y = 0;
      state.opacity = 100;
      state.color_primary = "#164e80";
      state.color_secondary = "#00b4cc";
      state.gradient_orientation = 0;
      state.gradient_rayon = 1;
      state.primary_opacity = 100;
      state.secondary_opacity = 100;
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

export const {
  togglePosition,
  selectShape,
  toggleLayout,
  toggleDisplay,
  toggleGradient,
  toggleGradientType,
  resetShape,
} = shapeSlice.actions;

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
