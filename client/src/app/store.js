import { configureStore } from "@reduxjs/toolkit";
// Reducers
import shapeReducer from "../features/PannelShape/shape.slice";
import navReducer from "../features/user/nav.slice";
import userReducer from "../features/user/user.slice";
import errorReducer from "../features/error/error.slice";
import loaderReducer from "../features/loaders/loader.slice";
import clothReducer from "../features/cloth/cloth.slice";
import socketReducer from "../features/socket/socket.slice";
// API
import socketAPI from "../features/socket/socketAPI";
// Middlewares
import connectionMiddleware from "./middlewares/connexionMiddleware";
import userMiddleware from "./middlewares/userMiddleware";

/*******    STORE     *******/

// Socket
const socketClient = new socketAPI();

export default configureStore({
  reducer: {
    shape: shapeReducer,
    nav: navReducer,
    user: userReducer,
    error: errorReducer,
    loader: loaderReducer,
    cloth: clothReducer,
    socket: socketReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([
      connectionMiddleware(socketClient),
      userMiddleware(socketClient),
    ]);
  },
});
