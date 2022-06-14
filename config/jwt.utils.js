const jwt = require("jsonwebtoken");

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

module.exports = {
  generateTokenForUser: (userData) => {
    return jwt.sign(
      {
        userId: userData.id,
      },
      JWT_SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );
  },

  parseAuthorisation: (token) => {
    console.log("AUTH", token);
    return token.replace("Bearer ", "");
  },

  decodeToken: (authorization) => {
    let token = module.exports.parseAuthorisation(authorization);
    const decodeToken = jwt.decode(token, { complete: true });
    return decodeToken;
  },

  getUserId: (authorization) => {
    let token = module.exports.parseAuthorisation(authorization);

    try {
      const tokenVerify = jwt.verify(token, JWT_SECRET_KEY);
      return tokenVerify.userId;
    } catch (error) {
      console.log("error JWS id", error);
      return false;
    }
  },
};
