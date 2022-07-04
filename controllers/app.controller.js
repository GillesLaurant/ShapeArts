const models = require("../models");
const jwtUtils = require("../config/jwt.utils");
const dayjs = require("dayjs");
const { Op } = require("sequelize");

module.exports = (io, socket) => {
  /*******    CONNEXION APP     *******/
  const connectApp = () => {
    let responseConnexion;

    // TODO find cloth
    models.Cloth.findOrCreate({
      where: {
        total_shapes: {
          [Op.lt]: 1000,
        },
      },
    })
      // Success find cloth
      .then((clothFind) => {
        // IF new cloth
        if (clothFind[1]) {
          console.log("CREATE CLOTH");

          responseConnexion = {
            clothId: clothFind[0].dataValues.id,
            cloth: [],
            count: clothFind[0].dataValues.total_shapes,
            newShape: false,
          };
          // const wait = setTimeout(() => {
          // Send new cloth virgin
          socket.emit("sendCloth", responseConnexion);
          // }, 5000);
          // return () => clearTimeout(wait);
        }

        // console.log("success cloth find", clothFind);
        // IF not new cloth to do find shapes
        models.Shape.findAll({
          where: {
            ClothId: clothFind[0].dataValues.id,
          },
          attributes: [
            "id",
            "name",
            "pos_x",
            "pos_y",
            "size",
            "rotation",
            "rotation_x",
            "rotation_y",
            "color_primary",
            "color_secondary",
            "primary_opacity",
            "secondary_opacity",
            "gradient_orientation",
            "gradient_rayon",
            "gradient_selector",
            "gradient_linear",
            "createdAt",
            "UserId",
          ],
          orders: [["createdAt", "DESC"]],
          include: {
            model: models.User,
            attributes: ["user_name"],
          },
        })
          // Success find shapes
          .then((shapesFind) => {
            // console.log("shapes findn", shapesFind);

            responseConnexion = {
              clothId: clothFind[0].dataValues.id,
              cloth:
                clothFind[0].dataValues.total_shapes !== 0 ? shapesFind : [],
              count: clothFind[0].dataValues.total_shapes,
              newShape: false,
            };
            const wait = setTimeout(() => {
              // Send cloth
              socket.emit("sendCloth", responseConnexion);
            }, 5000);
            return () => clearTimeout(wait);
          })
          // Error find shapes
          .catch((errShapes) => {
            console.log("error find shapes", errShapes);

            socket.emit("error_server", {
              nameError: "server",
              msgError: errorServer,
            });
          });
      })
      // Error find or create cloth
      .catch((errFind) => {
        console.log("error find cloth", errFind);

        socket.emit("error_server", {
          nameError: "server",
          msgError: errorServer,
        });
      });
  };

  /*******    DISCONNEXION     *******/
  const disconnect = (reason) => {
    // PARAMS
    let cookieReceiv = socket.handshake.headers.cookie;
    let newCookieUserId;

    // TODO check cookie
    if (!cookieReceiv) {
      return;
    }

    // TODO check token in cookie
    let jwsToken = cookieReceiv.match("JWSToken=Bearer ");

    // IF token in cookie
    if (jwsToken !== null) {
      const startToken = jwsToken["index"] + 9;
      // TODO egt token
      jwsToken = jwsToken["input"].substring(startToken, startToken + 151);
      console.log(jwsToken);
      // TODO find user
      const cookieUserId = jwtUtils.getUserId(jwsToken);

      // IF expired token
      if (!cookieUserId) {
        console.log("decode");
        // TODO decode token
        newCookieUserId = jwtUtils.decodeToken(jwsToken);
        newCookieUserId = newCookieUserId.payload.userId;
      }
      // TODO find user
      models.User.findByPk(!cookieUserId ? newCookieUserId : cookieUserId)
        // Success find
        .then((userFind) => {
          // TODO update user
          models.User.update(
            { is_loggin: false },
            {
              where: {
                id: userFind.dataValues.id,
              },
            }
          )
            // Success update loggout user
            .then((successUpdate) => {
              return console.log(
                "success DISCO UPDATE user",
                userFind.dataValues.id,
                successUpdate,
                reason
              );
            })
            // Error update loggout user
            .catch((errUpdate) => {
              return console.log("error DISCO UPDATE user", errUpdate);
            });
        })
        // Error find by pk
        .catch((errFK) => {
          return console.log("error FINDBYPK user", errFK);
        });
    }
  };

  /*******    ADD SHAPE     *******/
  const addShape = (payload) => {
    const { shape, userId, clothId } = payload;
    const timeToNow = dayjs().subtract(5, "minute").format();
    const now = dayjs().format();

    // TODO check time last shape create is less 5 minutes
    models.Shape.findOrCreate({
      where: {
        ClothId: clothId,
        UserId: userId,
        updatedAt: {
          [Op.gt]: timeToNow,
          [Op.lt]: now,
        },
      },
      defaults: {
        name: shape.name,
        pos_x: shape.pos_X,
        pos_y: shape.pos_Y,
        size: shape.size,
        rotation: shape.rotation,
        rotation_x: shape.rotation_X,
        rotation_y: shape.rotation_Y,
        color_primary: shape.color_primary,
        color_secondary: shape.color_secondary,
        primary_opacity: shape.primary_opacity,
        secondary_opacity: shape.secondary_opacity,
        gradient_orientation: shape.gradient_orientation,
        gradient_linear: shape.selector_linear,
        gradient_rayon: shape.gradient_rayon,
        gradient_selector: shape.selector_gradient,
        ClothId: clothId,
        UserId: userId,
      },
    })
      // Success sequelize model
      .then((shapeResulted) => {
        // IF shape is create
        if (shapeResulted[1]) {
          models.Cloth.increment(
            { total_shapes: 1 },
            {
              where: { id: clothId },
            }
          )
            // Success increment cloth
            .then(() => {
              // TODO update user counter shapes
              models.User.increment(
                { counter_shapes: 1 },
                { where: { id: userId } }
              )
                // Success increment shapes user
                .then((addedShape) => {
                  console.log("INCREMENT", addedShape);
                  console.log("success FINDALLCOUNT newshape", addedShape);

                  models.Shape.findAndCountAll({
                    where: {
                      ClothId: clothId,
                    },
                    attributes: [
                      "id",
                      "name",
                      "pos_x",
                      "pos_y",
                      "size",
                      "rotation",
                      "rotation_x",
                      "rotation_y",
                      "color_primary",
                      "color_secondary",
                      "primary_opacity",
                      "secondary_opacity",
                      "gradient_orientation",
                      "gradient_rayon",
                      "gradient_selector",
                      "gradient_linear",
                      "createdAt",
                      "UserId",
                    ],
                    orders: [["createdAt", "DESC"]],
                    include: {
                      model: models.User,
                      attributes: ["user_name"],
                    },
                  })
                    // Success findAll
                    .then((findAll) => {
                      const waitAgain = setTimeout(() => {
                        io.emit("successNewShape", {
                          cloth: findAll.rows,
                          count: findAll.count,
                        });
                        socket.emit(
                          "successCreateShape",
                          shapeResulted[0].createdAt
                        );
                      }, 5000);
                      return () => clearTimeout(wait, waitAgain);
                    });
                })
                // Error increment shapes user
                .catch((errIncre) => {
                  console.log("errIncre", errIncre);
                  socket.emit("error_server", {
                    nameError: "shape",
                    msgError: "Erreur, veuillez réessayer plus tard.",
                  });
                });
            })
            // Error increment cloth
            .catch((errCloth) => {
              console.log("errCloth", errCloth);
              socket.emit("error_server", {
                nameError: "shape",
                msgError: "Erreur, veuillez réessayer plus tard.",
              });
            });
        }
        // IF shape not create
        else if (!shapeResulted[1]) {
          return socket.emit("alreadyPlay", {
            date: shapeResulted[0].dataValues.createdAt,
            nameError: "shape",
            msgError: "C'est bientôt finit.",
          });
        }
      })

      // Error sequelize model;
      .catch((errModel) => {
        console.log("errModel", errModel);
        socket.emit("error_server", {
          nameError: "shape",
          msgError: "Erreur, veuillez réessayer plus tard.",
        });
      });
  };

  socket.on("connexion", connectApp);
  socket.on("disconnect", disconnect);
  socket.on("validShape", addShape);
};
