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
        console.log("checkExist", checkExist);

        // IF already use
        if (checkExist !== null) {
          console.log("ALREADY EXIST");
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
            .then((successCreate) => {
              console.log(successCreate);
              // IF succes create
              const date = new Date();
              date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
              const expires = date.toGMTString();

              // TODO generate token
              const jwtSign = jwtUtils.generateTokenForUser(
                successCreate.dataValues
              );
              // Set cookie
              io.engine.on("headers", (headers, req) => {
                headers[
                  "set-cookie"
                ] = `JWSToken=Bearer ${jwtSign}; expires=${expires}; httpOnly=true; path=/; secure=true`;
              });

              const wait = setTimeout(() => {
                console.log("finish register", successCreate.dataValues);

                // Send success register
                return socket.emit("successRegister", {
                  id: successCreate.dataValues.id,
                });
              }, 5000);
              return () => clearTimeout(wait);
            })
            // Error user create
            .catch((errCreate) => {
              console.log(errCreate);
              return socket.emit("error_server", {
                nameError: "server",
                msgError: errorServer,
              });
            });
        });
      })
      // Error findOne user
      .catch((errCheckExist) => {
        console.log(errCheckExist);
        socket.emit("error_server", {
          nameError: "server",
          msgError: errorServer,
        });
      });
  };

  /*******    LOGGIN     *******/

  const logginUser = (payload) => {
    const { mail, password } = payload;
    let counterShapes;

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
                  // TODO generate token expiration
                  const date = new Date();
                  date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
                  const expires = date.toGMTString();

                  // TODO generate new token
                  const jwtSign = jwtUtils.generateTokenForUser(
                    findUser.dataValues
                  );

                  // TODO set cookie
                  io.engine.on("headers", (headers, req) => {
                    headers[
                      "set-cookie"
                    ] = `JWSToken=Bearer ${jwtSign}; expires=${expires}; path=/; secure=true`;
                  });

                  const wait = setTimeout(() => {
                    console.log("finish Loggin", findUser.dataValues);

                    // Send success loggin
                    return socket.emit("successLoggin", {
                      id: findUser.dataValues.id,
                      username: findUser.dataValues.user_name,
                      counterShapes: findUser.dataValues.counter_shapes,
                    });
                  }, 5000);
                  return () => clearTimeout(wait);
                })

                // Error updateUser
                .catch((errUpdateUser) => {
                  console.log(errUpdateUser);
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
      .catch((errFindUser) => {
        console.log(errFindUser);
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
          .then((userUpdated) => {
            const wait = setTimeout(() => {
              console.log("finish loggout", userUpdated);

              // Send success loggout
              return socket.emit("successLoggout");
            }, 5000);
            return () => clearTimeout(wait);
          })

          // Error update user
          .catch((errUpdate) => {
            console.log(errUpdate);
            socket.emit("error_server", {
              nameError: "server",
              msgError: errorServer,
            });
          });
      })

      // Error find by pk
      .catch((errFind) => {
        console.log(errFind);
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
            .then((userDestroy) => {
              // TODO delete cookie
              io.engine.on("headers", (headers, req) => {
                headers[
                  "set-cookie"
                ] = `JWSToken=Bearer DELETED; expires=${new Date().toGMTString()}; path=/; secure=true`;
              });

              const wait = setTimeout(() => {
                console.log("finish destroy", userDestroy);

                // Send success delete
                return socket.emit("successDelete");
              }, 5000);
              return () => clearTimeout(wait);
            })
            // Error destroy
            .catch((errDestroy) => {
              console.log(errDestroy);
              socket.emit("error_server", {
                nameError: "server",
                msgError: errorServer,
              });
            });
        }

        // IF user have shapes
        models.User.update(
          {
            mail: `user_deleted_${userFind.dataValues.id}_${new Date()}`,
            password: `user_deleted_${userFind.dataValues.id}_${new Date()}`,
            isLoggin: false,
          },
          {
            where: {
              id: userFind.dataValues.id,
            },
          }
        )
          // Success update delete user
          .then((userUpdate) => {
            // TODO delete cookie
            io.engine.on("headers", (headers, req) => {
              headers[
                "set-cookie"
              ] = `JWSToken=Bearer DELETED; expires=${new Date().toGMTString()}; path=/; secure=true`;
            });

            const wait = setTimeout(() => {
              console.log("finish destroy", userUpdate);

              // Send success delete
              return socket.emit("successDelete");
            }, 5000);
            return () => clearTimeout(wait);
          })
          // Error update delete user
          .catch((errUpdate) => {
            console.log(errUpdate);
            socket.emit("error_server", {
              nameError: "server",
              msgError: errorServer,
            });
          });
      })

      // Error find user
      .catch((errFind) => {
        console.log(errFind);
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
