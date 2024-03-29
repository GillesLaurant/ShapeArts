import { addShape, getCloth } from "../../features/cloth/cloth.slice";
import { setError } from "../../features/error/error.slice";
import {
  createTiming,
  rememberTiming,
} from "../../features/PannelShape/shape.slice";
import {
  failedConnect,
  successConnect,
} from "../../features/socket/socket.slice";

/*******    CONNEXION MIDDLEWARE     *******/

export default function socketMiddleware(socket) {
  return ({ dispatch, getState }) =>
    (next) =>
    (action) => {
      switch (action.type) {
        /*******    START ACTION     *******/
        case "socket/connectSocket":
          // Connexion socket
          socket
            .connect()
            .then(() => {
              // IF socket connected get cloth
              if (socket.socket.connected) {
                console.log(socket.socket);
                dispatch(successConnect());
                socket.emit("connexion", {});
              }

              // Receiv first cloth
              socket.on("sendCloth", (clothReceiv) => {
                dispatch(getCloth(clothReceiv));
              });

              // Receiv all errors server
              socket.on("error_server", (err) => {
                console.log(err);
                dispatch(setError(err));
              });

              // Receiv new cloth
              socket.on("successNewShape", (newShape) => {
                dispatch(addShape(newShape));
              });
            })

            // Error connexion server
            .catch(() => {
              dispatch(failedConnect());
            });
          break;

        // Reconnect
        case "socket/failedConnect":
          socket
            .connect()
            .then(() => {
              if (socket.socket.connected) {
                dispatch(successConnect());
                socket.emit("connexion", {});
              }
            })
            .catch(() => {
              dispatch(setError({ nameError: "socket" }));
            });

          break;

        /*******    VALID SHAPE     *******/
        case "shape/validShape":
          const shape = getState().shape;
          const userId = getState().user.id;
          const username = getState().user.username;
          const clothId = getState().cloth.cloth_id;

          // Emit shape
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
