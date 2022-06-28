import { getCloth } from "../../features/cloth/cloth.slice";
import { setError } from "../../features/error/error.slice";
import {
  logginSuccess,
  registerSuccess,
  loggoutSuccess,
} from "../../features/user/user.slice";

/*******    USER MIDDLEWARE     *******/

export default function userMiddleware(socket) {
  return ({ dispatch, getState }) =>
    (next) =>
    (action) => {
      console.log("action", action);
      // User state
      const user = {
        username: getState().user.username,
        mail: getState().user.mail,
        password: getState().user.password,
      };

      switch (action.type) {
        /*******    REGISTER     *******/
        case "user/register":
          socket.emit("register", user);

          socket.on("successRegister", (registered) => {
            dispatch(registerSuccess(registered));
          });

          break;

        /*******    LOGGIN     *******/
        case "user/loggin":
          socket.emit("loggin", user);

          socket.on("successLoggin", (logged) => {
            dispatch(logginSuccess(logged));
          });

          break;
        /*******    LOGGOUT     *******/
        case "user/loggout":
          socket.emit("loggout", user.id);

          socket.on("successLoggout", (disconnected) => {
            dispatch(loggoutSuccess(disconnected));
          });

          break;

        default:
          break;
      }

      return next(action);
    };
}
