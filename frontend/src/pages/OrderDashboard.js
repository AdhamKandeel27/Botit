
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const OrderDashboard = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/orders')
      .then(response => {
        setOrders(response.data);
      })
      .catch(error => {
        console.error('Error fetching orders:', error);
      });
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Order Dashboard</h2>
      <table style={{ borderCollapse: 'collapse', width: '80%', margin: '20px auto' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '10px', backgroundColor: '#f2f2f2' }}>Order ID</th>
            <th style={{ border: '1px solid #ddd', padding: '10px' }}>Customer</th>
            <th style={{ border: '1px solid #ddd', padding: '10px' }}>Total Amount</th>
            <th style={{ border: '1px solid #ddd', padding: '10px' }}>Products</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order._id}>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>{order._id}</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>{order.customerName}</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>${order.totalAmount}</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>
                {}
                {order.productIdList && order.productIdList.length > 0 ? (
                  <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {order.productIdList.map((product, index) => (
                      <li key={index}> {product.name}</li>
                    ))}
                  </ul>
                ) : (
                  'N/A'
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link to="/orderFilter">
          <button className="button">Filter Order</button>
        </Link>    </div>
        
  );
};

export default OrderDashboard;






