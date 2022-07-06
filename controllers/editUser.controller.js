const models = require("../models");
const bcrypt = require("bcrypt");

// Params
const USERNAME_REGEX = /^[A-Za-z0-9_-]{3,15}$/;
const MAIL_REGEX = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const PWD_REGEX = /^[A-Za-z0-9_-]{4,15}$/;
const errorServer = "Erreur, veuillez reéssayer plus tard.";

module.exports = (io, socket) => {
  /*******    EDIT USERNAME     *******/
  const editUsername = (payload) => {
    const { id, usernameEdited } = payload;

    // TODO ckeck validity data user
    if (!USERNAME_REGEX.test(usernameEdited)) {
      return socket.emit("error_server", {
        nameError: "usernameEdited",
        msgError: "Entrez un pseudo entre 3 et 15 charactères.",
      });
    }

    models.User.findByPk(id)
      // Success find
      .then((userFind) => {
        // TODO update username
        models.User.update(
          {
            user_name: usernameEdited,
          },
          {
            where: {
              id: userFind.dataValues.id,
            },
          }
        )
          // Success edit username
          .then(() => {
            // Send username edited
            return socket.emit("successEdit", "usernameEdited");
          })

          // Error update username
          .catch(() => {
            socket.emit("error_server", {
              nameError: "server",
              msgError: errorServer,
            });
          });
      })
      // Error find by pk
      .catch(() => {
        socket.emit("error_server", {
          nameError: "server",
          msgError: errorServer,
        });
      });
  };

  /*******    EDIT MAIL     *******/
  const editMail = (payload) => {
    const { id, mailEdited } = payload;

    // TODO ckeck validity data user
    if (!MAIL_REGEX.test(mailEdited)) {
      return socket.emit("error_server", {
        nameError: "mailEdited",
        msgError: "Entrez une adresse mail valide.",
      });
    }

    // TODO check mail already use
    models.User.findOne({ where: { mail: mailEdited } })
      .then((mailUse) => {
        // IF mail already use
        if (mailUse !== null) {
          return socket.emit("error_server", {
            nameError: "mailEdited",
            msgError: "Cette adresse mail est déjà utilisée.",
          });
        }

        // TODO find user
        models.User.findByPk(id)
          // Success find
          .then((userFind) => {
            // TODO update mail
            models.User.update(
              {
                mail: mailEdited,
              },
              {
                where: {
                  id: userFind.dataValues.id,
                },
              }
            )
              // Success edit
              .then(() => {
                // Send mail edited
                return socket.emit("successEdit", "mailEdited");
              })

              // Error update mail
              .catch(() => {
                socket.emit("error_server", {
                  nameError: "server",
                  msgError: errorServer,
                });
              });
          })
          // Error find by pk
          .catch(() => {
            socket.emit("error_server", {
              nameError: "server",
              msgError: errorServer,
            });
          });
      })
      // Error check mail already use
      .catch(() => {
        socket.emit("error_server", {
          nameError: "server",
          msgError: errorServer,
        });
      });
  };

  /*******    EDIT PASSWORD     *******/
  const editPwd = (payload) => {
    const { id, holdPwd, newPwd } = payload;

    // TODO ckeck validity data user
    if (!PWD_REGEX.test(holdPwd)) {
      return socket.emit("error_server", {
        nameError: "holdPwd",
        msgError: "Doit contenir entre 4 et 15 charactères.",
      });
    }

    if (!PWD_REGEX.test(newPwd)) {
      return socket.emit("error_server", {
        nameError: "newPwd",
        msgError: "Doit contenir entre 4 et 15 charactères.",
      });
    }

    models.User.findByPk(id)
      // Success find
      .then((userFind) => {
        // TODO check hold password match
        bcrypt.compare(
          holdPwd,
          userFind.dataValues.password,
          (compareErr, compareSuccess) => {
            // Success compare
            if (compareSuccess) {
              // TODO hash new password
              bcrypt.hash(newPwd, 5, (err, hash) => {
                // TODO update password
                models.User.update(
                  { password: hash },
                  {
                    where: {
                      id: userFind.dataValues.id,
                    },
                  }
                )
                  // Success update password
                  .then(() => {
                    // Send mail edited
                    return socket.emit("successEdit", "pwdEdited");
                  })
                  // Error update password
                  .catch(() => {
                    socket.emit("error_server", {
                      nameError: "server",
                      msgError: errorServer,
                    });
                  });
              });
            }
            // IF password not match
            else {
              socket.emit("error_server", {
                nameError: "holdPwd",
                msgError: "L'ancien mot de passe n'est pas le bon.",
              });
            }
          }
        );
      })
      // Error find by pk
      .catch(() => {
        socket.emit("error_server", {
          nameError: "server",
          msgError: errorServer,
        });
      });
  };

  // Listeners socket
  socket.on("editUsername", editUsername);
  socket.on("editMail", editMail);
  socket.on("editPwd", editPwd);
};
