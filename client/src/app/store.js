import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../features/app/app.slice";

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});
