import { addShape, getCloth } from "../../features/cloth/cloth.slice";
import { setError } from "../../features/error/error.slice";
import {
  createTiming,
  rememberTiming,
} from "../../features/PannelShape/shape.slice";
import { successConnect } from "../../features/socket/socket.slice";

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
              console.log("connect");
              // IF socket connected get cloth
              if (socket.socket.connected) {
                dispatch(successConnect());
                socket.emit("connexion", {});
              } else {
                console.log("ERR NOT CONNECT");
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
            .catch((errorConnect) => {
              console.log("ERROR SOCKET", socket.socket.connected);

              // const wait = setTimeout(() => {
              //   if (
              //     !socket.socket.connected &&
              //     getState().socket.connectAttemps < 5
              //   ) {
              //     const timing = setTimeout(() => {
              //       console.log();
              //       dispatch(connectSocket());
              //     }, getState().socket.connectAttemps * 1000);
              //     return () => {
              //       clearTimeout(timing);
              //       // clearTimeout(wait);
              //     };
              //   }
              // }, 2000);
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
            console.log(dateShape);
            dispatch(createTiming(dateShape));
          });

          // If already play in less 5 minutes
          socket.on("alreadyPlay", (timePlayed) => {
            console.log(timePlayed);
            dispatch(rememberTiming(timePlayed));
          });
          break;

        default:
          break;
      }

      return next(action);
    };
}
