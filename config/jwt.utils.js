const jwt = require("jsonwebtoken");

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

module.exports = {
  // TOKEN GENERATOR
  generateTokenForUser: (userData) => {
    return jwt.sign(
      {
        userId: userData.id,
      },
      JWT_SECRET_KEY,
      {
        expiresIn: 3600,
      }
    );
  },

  // CHECK AUTHENTIFICATED
  parseAuthorisation: (token) => {
    return token.replace("Bearer ", "");
  },

  // DECODE EXPIRATION TOKEN
  decodeToken: (authorization) => {
    let token = module.exports.parseAuthorisation(authorization);
    const decodeToken = jwt.decode(token, { complete: true });
    return decodeToken;
  },

  // GET ID USER IN TOKEN
  getUserId: (authorization) => {
    let token = module.exports.parseAuthorisation(authorization);

    try {
      const tokenVerify = jwt.verify(token, JWT_SECRET_KEY);
      return tokenVerify.userId;
    } catch (error) {
      return false;
    }
  },
};
