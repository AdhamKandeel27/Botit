import React from 'react';
import { Link } from 'react-router-dom';
import'../CSS/Home.css';

const Home = () => {
  return (
    <div>
      <h1>Botit Market</h1>
      <div className="buttons-container">
        <Link to="/signUp">
          <button className="button">New Customer</button>
        </Link>
        <Link to="/signIn">
          <button className="button">Existing Customer</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;