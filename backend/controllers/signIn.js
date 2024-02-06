const User = require('../Models/userModel');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");




const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      const token1 = jwt.sign({}, process.env.JWT_SECRET);

      if (res.status(201)) {
        return res.json({ status: "ok", data: token1 })
      }
      else {
        return res.json({ error: "errorrrr" })
      }
    }
    
    return res.status(401).json({ message: 'Invalid  password' });

    //const token = await user.jwtGenerateToken();
    //const token1 = jwt.sign({}, process.env.JWT_SECRET);


    // res.json({
    //   message: 'Sign-in successful',

    //   token
    // });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  signIn,
};




