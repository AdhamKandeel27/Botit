const User = require('../Models/userModel');
const bcrypt = require('bcrypt');



const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token= await user.jwtGenerateToken();

    // At this point, the user is successfully authenticated
    res.json({
      message: 'Sign-in successful',

      token
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  signIn,
  // Add other user-related controller functions as needed
};
