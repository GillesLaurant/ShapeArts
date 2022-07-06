const models = require("../models");
const bcrypt = require("bcrypt");
const jwtUtils = require("../config/jwt.utils");

// Params
const USERNAME_REGEX = /^[A-Za-z0-9_-]{3,15}$/;
const MAIL_REGEX = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const PWD_REGEX = /^[A-Za-z0-9_-]{4,15}$/;
const errorServer = "Erreur, veuillez reéssayer plus tard.";

/*******    USER CONTROLLER     *******/

module.exports = (io, socket) => {
  /*******    REGISTER     *******/
  const registerUser = (payload) => {
    const { username, mail, password } = payload;

    // TODO ckeck validity data user
    if (!USERNAME_REGEX.test(username)) {
      return socket.emit("error_server", {
        nameError: "username",
        msgError: "Entrez un pseudo entre 3 et 15 charactères.",
      });
    }
    if (!MAIL_REGEX.test(mail)) {
      return socket.emit("error_server", {
        nameError: "mail",
        msgError: "Entrez une adresse mail valide.",
      });
    }
    if (!PWD_REGEX.test(password)) {
      return socket.emit("error_server", {
        nameError: "password",
        msgError: "Doit contenir entre 4 et 15 charactères.",
      });
    }

    // TODO check already user exist
    models.User.findOne({ where: { mail } })
      .then((checkExist) => {
        // IF already use
        if (checkExist !== null) {
          // Send error message
          return socket.emit("error_server", {
            nameError: "mail",
            msgError: "Cet utilisateur existe déjà.",
          });
        }

        // IF mail not use
        bcrypt.hash(password, 5, (err, hash) => {
          // IF success hash
          models.User.create({
            user_name: username,
            mail,
            password: hash,
            is_loggin: true,
          })
            // IF succes create
            .then((successCreate) => {
              // TODO generate token
              const jwtSign = jwtUtils.generateTokenForUser(
                successCreate.dataValues
              );

              socket.handshake.auth.tokenId = jwtSign;

              // Send success register
              return socket.emit("successRegister", {
                id: successCreate.dataValues.id,
              });
            })
            // Error user create
            .catch(() => {
              return socket.emit("error_server", {
                nameError: "server",
                msgError: errorServer,
              });
            });
        });
      })
      // Error findOne user
      .catch(() => {
        socket.emit("error_server", {
          nameError: "server",
          msgError: errorServer,
        });
      });
  };

  /*******    LOGGIN     *******/

  const logginUser = (payload) => {
    const { mail, password } = payload;

    // TODO ckeck validity data user
    if (!MAIL_REGEX.test(mail)) {
      return socket.emit("error_server", {
        nameError: "mail",
        msgError: "Entrez une adresse mail valide.",
      });
    }
    if (!PWD_REGEX.test(password)) {
      return socket.emit("error_server", {
        nameError: "password",
        msgError: "Doit contenir entre 4 et 15 charactères.",
      });
    }

    // TODO verify user exist
    models.User.findOne({ where: { mail: mail } })
      .then((findUser) => {
        // IF user not exist
        if (findUser === null) {
          return socket.emit("error_server", {
            nameError: "mail",
            msgError: "Cet utilisateur n'existe pas.",
          });
        }

        // TODO compare password
        bcrypt.compare(
          password,
          findUser.dataValues.password,
          (compareErr, compareSuccess) => {
            // IF success compare
            if (compareSuccess) {
              // Logg user
              models.User.update(
                { is_loggin: true },
                {
                  where: {
                    id: findUser.dataValues.id,
                  },
                }
              )

                // Success update user
                .then(() => {
                  // TODO generate new token
                  const jwtSign = jwtUtils.generateTokenForUser(
                    findUser.dataValues
                  );

                  socket.handshake.auth.tokenId = jwtSign;

                  // Send success loggin
                  return socket.emit("successLoggin", {
                    id: findUser.dataValues.id,
                    username: findUser.dataValues.user_name,
                    counterShapes: findUser.dataValues.counter_shapes,
                  });
                })

                // Error updateUser
                .catch(() => {
                  socket.emit("error_server", {
                    nameError: "server",
                    msgError: errorServer,
                  });
                });
            }
            // IF password no match
            else {
              socket.emit("error_server", {
                nameError: "password",
                msgError: "Le mot de passe n'est pas le bon.",
              });
            }
          }
        );
      })
      // Error find user
      .catch(() => {
        socket.emit("error_server", {
          nameError: "server",
          msgError: errorServer,
        });
      });
  };

  /*******    LOGGOUT     *******/

  const loggoutUser = (payload) => {
    // TODO check user exist
    models.User.findByPk(payload)
      // Success find
      .then((userFind) => {
        // TODO update user loggout
        models.User.update(
          { is_loggin: false },
          {
            where: {
              id: userFind.dataValues.id,
            },
          }
        )
          // Success update user
          .then(() => {
            socket.handshake.auth.tokenId = -1;
            // Send success loggout
            return socket.emit("successLoggout");
          })

          // Error update user
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

  /*******    DELETE     *******/

  const deleteUser = (payload) => {
    const { id, count } = payload;

    // TODO check user exist
    models.User.findByPk(id)
      // Success find
      .then((userFind) => {
        // IF user haven't shapes
        if (count === 0) {
          // TODO delete user
          models.User.destroy({
            where: {
              id: userFind.dataValues.id,
            },
          })
            // Success destroy
            .then(() => {
              socket.handshake.auth.tokenId = -1;

              // Send success delete
              return socket.emit("successDelete");
            })
            // Error destroy
            .catch(() => {
              socket.emit("error_server", {
                nameError: "server",
                msgError: errorServer,
              });
            });
        }

        let date = new Date();
        date = date.toGMTString();

        // IF user have shapes
        models.User.update(
          {
            mail: `user_deleted_${userFind.dataValues.id}_${date}`,
            password: `user_deleted_${userFind.dataValues.id}_${date}`,
            is_loggin: false,
          },
          {
            where: {
              id: userFind.dataValues.id,
            },
          }
        )
          // Success update delete user
          .then(() => {
            socket.handshake.auth.tokenId = -1;

            // Send success delete
            return socket.emit("successDelete");
          })
          // Error update delete user
          .catch(() => {
            socket.emit("error_server", {
              nameError: "server",
              msgError: errorServer,
            });
          });
      })

      // Error find user
      .catch(() => {
        socket.emit("error_server", {
          nameError: "server",
          msgError: errorServer,
        });
      });
  };

  // Listeners socket
  socket.on("register", registerUser);
  socket.on("loggin", logginUser);
  socket.on("loggout", loggoutUser);
  socket.on("delete", deleteUser);
};
