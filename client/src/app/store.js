import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../features/app/app.slice";
import shapeReducer from "../features/shape/shape.slice";
import navReducer from "../features/app/navUser.slice";
import userReducer from "../features/app/user.slice";
import errorReducer from "../features/error/error.slice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    shape: shapeReducer,
    nav: navReducer,
    user: userReducer,
    error: errorReducer,
  },
});
