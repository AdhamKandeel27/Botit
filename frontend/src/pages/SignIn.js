import React, { useState } from 'react';
import axios from 'axios';
import '../CSS/Form.css'
import { Link } from 'react-router-dom';


const Signin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignin = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/signIn', formData);
      console.log(response.data);
      const token = response.data.token;
      localStorage.setItem('authToken', token);
    
    } catch (error) {
      console.error('Error during signin:', error.message);
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <div>
        <label>Email:</label>
        <input type="email" placeholder='Email' name="email" onChange={handleInputChange} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" placeholder='Password' name="password" onChange={handleInputChange} />
      </div>
      <Link to="/profile">
        <button onClick={handleSignin}>Sign In</button>
      </Link>
    </div>
  );
};


export default Signin;
