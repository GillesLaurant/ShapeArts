import { getCloth } from "../../features/cloth/cloth.slice";
import { setError } from "../../features/error/error.slice";
import { successConnect } from "../../features/socket/socket.slice";

export default function socketMiddleware(socket) {
  return ({ dispatch, getState }) =>
    (next) =>
    (action) => {
      switch (action.type) {
        case "socket/connectSocket":
          // Connexion socket
          socket
            .connect()
            .then(() => {
              // IF socket connected get cloth
              if (socket.socket.connected) {
                dispatch(successConnect());
                socket.emit("connexion", {});
              } else {
                console.log("ERR NOT CONNECT");
              }

              // Receiv cloth
              socket.on("sendCloth", (res) => {
                console.log("cloth", res);
                dispatch(getCloth(res));
              });

              // Receiv all errors server
              socket.on("error_server", (err) => {
                console.log("ERROR", err);
                dispatch(setError(err));
              });
            })
            // Error connexion server
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
