 

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const OrderFilterPage = () => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleFilterClick = async () => {
    try {
      // Make a GET request to /filteredOrders with the filter criteria
      const response = await axios.get('http://localhost:8000/api/filteredOrders', {
        params: {
          startDate,
          endDate,
          minPrice,
          maxPrice,
        },
      });

      // Navigate to a new page ("/filteredOrdersss") and pass the filtered orders data as state
      navigate('/filteredOrdersss', { state: { filteredOrders: response.data } });
    } catch (error) {
      console.error('Error fetching filtered orders:', error);
    }
  };

  return (
    <div>
      <h2>Order Filter</h2>
      <label>
        Start Date:
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      </label>
      <label>
        End Date:
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      </label>
      <label>
        Min Price:
        <input type="number" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
      </label>
      <label>
        Max Price:
        <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
      </label>
      <button onClick={handleFilterClick}>Filter Orders</button>
    </div>
  );
};

export default OrderFilterPage;
