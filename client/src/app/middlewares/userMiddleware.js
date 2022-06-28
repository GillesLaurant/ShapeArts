import { getCloth } from "../../features/cloth/cloth.slice";
import { setError } from "../../features/error/error.slice";
import { registerSuccess } from "../../features/user/user.slice";

/*******    USER MIDDLEWARE     *******/

export default function userMiddleware(socket) {
  return ({ dispatch, getState }) =>
    (next) =>
    (action) => {
      console.log("action", action);
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

        default:
          break;
      }

      return next(action);
    };
}
