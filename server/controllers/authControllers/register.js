const bcrypt = require('bcrypt');
const User = require('../../models/user');

const generateToken = require('../../utils/authentication/generateToken');

module.exports = async function (req, res) {
  try {
    const { username, password } = req.body;

    let user = await User.findOne({
      where: { username },
    });

    if (user) res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);

    user = await User.create({ username, password: hashedPassword });

    const token = await generateToken(user.dataValues);

    return res.status(201).json({ token });
  } catch (err) {
    return res.status(500).json({
      message: ('registration failed', err.message),
    });
  }
};
