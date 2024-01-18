// userController.js
const User = require('../Models/userModel');
const bcrypt = require('bcrypt');


// Example route to create a new user
const createUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);


        // Create a new user instance
        const newUser = new User({ firstName, lastName, email, password: hashedPassword });

        // Save the user to the database
        const savedUser = await newUser.save();

        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    createUser,
};
