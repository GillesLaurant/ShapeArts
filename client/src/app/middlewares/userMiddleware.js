import {
  logginSuccess,
  registerSuccess,
  loggoutSuccess,
  deleteSuccess,
  editSuccess,
} from "../../features/user/user.slice";

/*******    USER MIDDLEWARE     *******/

export default function userMiddleware(socket) {
  return ({ dispatch, getState }) =>
    (next) =>
    (action) => {
      // console.log("test2");
      // User state
      const user = getState().user;

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
            console.log(logged);
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

        /*******    DELETE     *******/
        case "user/deleteAccount":
          socket.emit("delete", { id: user.id, count: user.countShapes });

          socket.on("successDelete", (deleted) => {
            dispatch(deleteSuccess(deleted));
          });
          break;

        /*******    EDITS     *******/
        case "user/edit":
          console.log(action.payload);
          switch (action.payload) {
            // Edit username
            case "editUsername":
              socket.emit("editUsername", {
                id: user.id,
                usernameEdited: user.usernameEdited,
              });
              break;

            // Edit mail
            case "editMail":
              socket.emit("editMail", {
                id: user.id,
                mailEdited: user.mailEdited,
              });
              break;

            // Edit password
            case "editPwd":
              socket.emit("editPwd", {
                id: user.id,
                holdPwd: user.holdPwd,
                newPwd: user.newPwd,
              });
              break;
            default:
              break;
          }

          // Receiv all edits
          socket.on("successEdit", (edited) => {
            const successEdited = {
              newEdited: edited.slice(-0, -6),
              resetEdited: edited,
            };

            dispatch(editSuccess(successEdited));
          });
          break;

        default:
          break;
      }

      return next(action);
    };
}
