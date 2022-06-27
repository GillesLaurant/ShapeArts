import { getCloth } from "../../features/cloth/cloth.slice";

export default function socketMiddleware(socket) {
  return ({ dispatch, getState }) =>
    (next) =>
    (action) => {
      console.log("action", typeof action, action);

      if (typeof action === "function") {
        console.log("NOT");
        return action(dispatch, getState);
      }

      const { promise, type, types, ...rest } = action;

      // if (type !== "socket" || !promise) {
      //   return next(action);
      // }

      console.log("yes", types);
      if (action.type === "socket/connectSocket") {
        socket.connect().then(() => {
          socket.emit("connection", {});
          socket.on("sendCloth", (res) => {
            console.log(res);
            dispatch(getCloth(res));
          });
        });
      }

      return next(action);
    };
}
