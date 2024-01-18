const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
require('dotenv').config();


const userSchema = new mongoose.Schema({


    firstName: {
        type: String,
        required: true,
    },

    lastName: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
      },
      password: {
        type: String,
        required: true,
      },



});


userSchema.methods.jwtGenerateToken = function(){

    return jwt.sign({id: this.id, firstName: this.firstName, lastName: this.lastName},process.env.JWT_SECRET,{
        expiresIn: 3600
    });

}




module.exports = mongoose.model("UserModel", userSchema)