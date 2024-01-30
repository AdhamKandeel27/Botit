import React from 'react';
import './App.css';
import home from './pages/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import productDetails from './pages/productDetails';
import OrderDashboard from './pages/OrderDashboard';
import Signup from './pages/SignUp';
import SignIn from './pages/SignIn';
import OrderFilter from './pages/OrderFilter';
import profile  from './pages/Profile';
import filtOrders  from './pages/FilteredOrders';








const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" Component={home} />
                <Route exact path="/orders" Component={OrderDashboard} />
                <Route exact path="/products" Component={productDetails} />
                <Route exact path="/signUp" Component={Signup} />
                <Route exact path="/signIn" Component={SignIn} />
                <Route exact path="/orderFilter" Component={OrderFilter} />
                <Route exact path="/profile" Component={profile} />
                <Route exact path="/filteredOrdersss" Component={filtOrders} />
            </Routes>
        </Router>




    )
}

export default App