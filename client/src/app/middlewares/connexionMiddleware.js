import { addShape, getCloth } from "../../features/cloth/cloth.slice";
import { setError } from "../../features/error/error.slice";
import {
  createTiming,
  rememberTiming,
} from "../../features/PannelShape/shape.slice";
import {
  successConnect,
  failedConnect,
} from "../../features/socket/socket.slice";

/*******    CONNEXION MIDDLEWARE     *******/

export default function socketMiddleware(socket) {
  return ({ dispatch, getState }) =>
    (next) =>
    (action) => {
      // console.log("test1", socket.socket);
      switch (action.type) {
        /*******    START ACTION     *******/
        case "socket/connectSocket":
          // Connexion socket
          socket
            .connect()
            .then(() => {
              console.log("essai");
              // IF socket connected get cloth
              if (socket.socket.connected) {
                dispatch(successConnect());
                socket.emit("connexion", {});
              }

              // Receiv first cloth
              socket.on("sendCloth", (clothReceiv) => {
                dispatch(getCloth(clothReceiv));
              });

              // Receiv all errors server
              socket.on("error_server", (err) => {
                console.log("ERROR", err);
                dispatch(setError(err));
              });

              // Receiv new cloth
              socket.on("successNewShape", (newShape) => {
                dispatch(addShape(newShape));
              });
            })

            // Error connexion server & try reconnect
            .catch(() => {
              console.log("ERROR SOCKET", socket.socket.connected);
              dispatch(failedConnect());
            });
          break;

        // Reconnect
        case "socket/failedConnect":
          socket
            .connect()
            .then(() => {
              if (socket.socket.connected) {
                console.log("reco");
                dispatch(successConnect());
                socket.emit("connexion", {});
              }
            })
            .catch(() => {
              console.log("ERR NOT CONNECT");
              dispatch(setError({ nameError: "socket" }));
              socket.disconnect();
            });

          break;

        /*******    VALID SHAPE     *******/
        case "shape/validShape":
          const shape = getState().shape;
          const userId = getState().user.id;
          const username = getState().user.username;
          const clothId = getState().cloth.cloth_id;
          socket.emit("validShape", { shape, userId, username, clothId });

          // Receiv date shape timing
          socket.on("successCreateShape", (dateShape) => {
            dispatch(createTiming(dateShape));
          });

          // If already play in less 5 minutes
          socket.on("alreadyPlay", (timePlayed) => {
            dispatch(rememberTiming(timePlayed));
          });
          break;

        default:
          break;
      }

      return next(action);
    };
}
