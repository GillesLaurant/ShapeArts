import { createSlice } from "@reduxjs/toolkit";

/*******     SHAPE     *******/

// State
const initialState = {
  //  Config shape
  name: "round",
  pos_X: 450,
  pos_Y: 350,
  size: 10,
  rotation: 0,
  rotation_X: 0,
  rotation_Y: 0,
  // Config color
  color_primary: "#00b4cc",
  color_secondary: "#e30fe6",
  // Toggle "Normal" || "Gradient"
  selector_gradient: false,
  // Toggle "Linear" || "Gradient"
  selector_linear: true,
  // Linear orientation
  gradient_orientation: 0,
  // Rayon radial
  gradient_rayon: 1,
  // Opacitys
  primary_opacity: 1,
  secondary_opacity: 1,
  // Active shape
  is_active: false,
  dateCreated: false,
};

// Slice
export const shapeSlice = createSlice({
  name: "shape",
  initialState,
  reducers: {
    // Toggle shape position with mouse event
    togglePosition: (state, action) => {
      state.pos_X = action.payload.posX;
      state.pos_Y = action.payload.posY;
      if (!state.is_active) {
        state.is_active = true;
      }
    },
    // Input select "Round" || "Square" || "Triangle" || "Star"
    selectShape: (state, action) => {
      state.name = action.payload;
      if (!state.is_active) {
        state.is_active = true;
      }
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
      if (!state.is_active) {
        state.is_active = true;
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
    // Toggle "Linear" || "Radial"
    toggleGradientType: (state) => {
      state.selector_linear = !state.selector_linear;
    },
    // Reset config shape
    resetShape: (state) => {
      state.name = "round";
      state.pos_X = 450;
      state.pos_Y = 350;
      state.size = 10;
      state.rotation = 0;
      state.rotation_X = 0;
      state.rotation_Y = 0;
      state.opacity = 100;
      state.color_primary = "#00b4cc";
      state.color_secondary = "#e30fe6";
      state.gradient_orientation = 0;
      state.gradient_rayon = 1;
      state.primary_opacity = 100;
      state.secondary_opacity = 100;
    },
    // Send new shape to server
    validShape: () => {},
    // Receiv timing & reset shape
    createTiming: (state, action) => {
      state.dateCreated = action.payload;
      state.is_active = false;
      state.name = "round";
      state.pos_X = 450;
      state.pos_Y = 350;
      state.size = 10;
      state.rotation = 0;
      state.rotation_X = 0;
      state.rotation_Y = 0;
      state.opacity = 100;
      state.color_primary = "#00b4cc";
      state.color_secondary = "#e30fe6";
      state.gradient_orientation = 0;
      state.gradient_rayon = 1;
      state.primary_opacity = 100;
      state.secondary_opacity = 100;
    },
    // Receiv timing for cheeters
    rememberTiming: (state, action) => {
      if (!state.dateCreated) {
        state.is_active = false;
        state.dateCreated = action.payload.date;
      }
    },
    // End timing reset time
    resetTiming: (state) => {
      state.dateCreated = false;
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

// Actions
export const {
  togglePosition,
  selectShape,
  toggleLayout,
  toggleDisplay,
  toggleGradient,
  toggleGradientType,
  resetShape,
  validShape,
  createTiming,
  rememberTiming,
  resetTiming,
} = shapeSlice.actions;

// export const shapeState = (state) => state.shape;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd = (amount) => (dispatch, getState) => {
//   const currentValue = selectCount(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };

// Reducer
export default shapeSlice.reducer;
