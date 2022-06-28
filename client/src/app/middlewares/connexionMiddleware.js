import { getCloth } from "../../features/cloth/cloth.slice";
import { setError } from "../../features/error/error.slice";
import { successConnect } from "../../features/socket/socket.slice";

export default function socketMiddleware(socket) {
  return ({ dispatch, getState }) =>
    (next) =>
    (action) => {
      // console.log("action", action);

      switch (action.type) {
        case "socket/connectSocket":
          socket
            .connect()
            .then(() => {
              if (socket.socket.connected) {
                dispatch(successConnect());
                socket.emit("connexion", {});
              } else {
                console.log("ERR NOT CONNECT");
              }

              socket.on("sendCloth", (res) => {
                console.log("cloth", res);
                dispatch(getCloth(res));
              });

              socket.on("error_server", (err) => {
                console.log("ERROR", err);
                dispatch(setError(err));
              });
            })
            .catch((errorConnect) => {
              console.log(errorConnect);
            });
          break;

        default:
          break;
      }

      return next(action);
    };
}
