// Signup.js
import React, { useState } from 'react';
import axios from 'axios';
import '../CSS/Form.css';
import { Link } from 'react-router-dom';



const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/signUp', formData);
      console.log(response.data); // Handle success as needed
    } catch (error) {
      console.error('Error during signup:', error.message);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <div>
        <label>First Name:</label>
        <input type="text" name="firstName" onChange={handleInputChange} />
      </div>
      <div>
        <label>Last Name:</label>
        <input type="text" name="lastName" onChange={handleInputChange} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" onChange={handleInputChange} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" onChange={handleInputChange} />
      </div>
      <Link to="/signIn">
        <button onClick={handleSignup}>Sign Up</button>
      </Link>
    </div>
  );
};

export default Signup;
