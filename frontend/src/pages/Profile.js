import React  from 'react';
import { Link } from 'react-router-dom';


const WelcomePage = () => {


  return (
    <div>
      <h2>Welcome!</h2>
      <div>
        <Link to="/orders">
          <button>Orders</button>
        </Link>
        <Link to="/products">
          <button>Products</button>
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;