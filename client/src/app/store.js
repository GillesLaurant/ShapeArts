import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../features/app/app.slice";
import shapeReducer from "../features/shape/shape.slice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    shape: shapeReducer,
  },
});
