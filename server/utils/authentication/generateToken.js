const jwt = require('jsonwebtoken');

module.exports = async function (user) {
  const payload = {
    username: user.username,
    isAdmin: user.isAdmin,
  };

  const token = await jwt.sign(payload, process.env.JWTSECRET);
  return token;
};
