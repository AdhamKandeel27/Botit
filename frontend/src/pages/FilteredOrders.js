// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // const FilteredOrdersTable = () => {
// //   const [filteredOrders, setFilteredOrders] = useState([]);

// //   useEffect(() => {
// //     // Fetch filtered orders from the API endpoint
// //     axios.get('http://localhost:8000/api/filteredOrders')
// //       .then(response => {
// //         setFilteredOrders(response.data);
// //         console.log('filllll', response.data);      
// //       })
// //       .catch(error => {
// //         console.error('Error fetching filtered orders:', error);
// //       });
// //   }, []);

// //   return (
// //     <div style={{ textAlign: 'center', marginTop: '20px' }}>
// //       <h2>Filtered Orders Table</h2>
// //       <table style={{ borderCollapse: 'collapse', width: '80%', margin: '20px auto' }}>
// //         <thead>
// //           <tr>
// //             <th style={{ border: '1px solid #ddd', padding: '10px', backgroundColor: '#f2f2f2' }}>Order ID</th>
// //             <th style={{ border: '1px solid #ddd', padding: '10px' }}>Customer</th>
// //             <th style={{ border: '1px solid #ddd', padding: '10px' }}>Total Amount</th>
// //             <th style={{ border: '1px solid #ddd', padding: '10px' }}>Date</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {filteredOrders.map(order => (
// //             <tr key={order._id}>
// //               <td style={{ border: '1px solid #ddd', padding: '10px' }}>{order._id}</td>
// //               <td style={{ border: '1px solid #ddd', padding: '10px' }}>{order.customerName}</td>
// //               <td style={{ border: '1px solid #ddd', padding: '10px' }}>${order.totalAmount}</td>
// //               <td style={{ border: '1px solid #ddd', padding: '10px' }}>{order.date}</td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // };

// // export default FilteredOrdersTable;






// import React from 'react';

// const FilteredOrdersTable = ({ filteredOrders }) => {
//   return (
//     <div>
//       <h2>Filtered Orders Table</h2>
//       <table style={{ borderCollapse: 'collapse', width: '80%', margin: '20px auto' }}>
//         <thead>
//           <tr>
//             <th style={{ border: '1px solid #ddd', padding: '10px', backgroundColor: '#f2f2f2' }}>Order ID</th>
//             <th style={{ border: '1px solid #ddd', padding: '10px' }}>Customer</th>
//             <th style={{ border: '1px solid #ddd', padding: '10px' }}>Total Amount</th>
//             {/* Add more columns as needed */}
//           </tr>
//         </thead>
//         <tbody>
//           {filteredOrders.map(order => (
//             <tr key={order._id}>
//               <td style={{ border: '1px solid #ddd', padding: '10px' }}>{order._id}</td>
//               <td style={{ border: '1px solid #ddd', padding: '10px' }}>{order.customerName}</td>
//               <td style={{ border: '1px solid #ddd', padding: '10px' }}>${order.totalAmount}</td>
//               {/* Add more cells as needed */}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default FilteredOrdersTable;



import React from 'react';

const FilteredOrdersTable = ({ filteredOrders }) => {
  return (
    <div>
      <h2>Filtered Orders Table</h2>
      {filteredOrders && filteredOrders.length > 0 ? (
        <table style={{ borderCollapse: 'collapse', width: '80%', margin: '20px auto' }}>
          <thead>
            <tr>
              {Object.keys(filteredOrders[0] || {}).map(key => (
                <th key={key} style={{ border: '1px solid #ddd', padding: '10px', backgroundColor: '#f2f2f2' }}>
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map(order => (
              <tr key={order._id}>
                {Object.values(order).map(value => (
                  <td key={value} style={{ border: '1px solid #ddd', padding: '10px' }}>
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No filtered orders available.</p>
      )}
    </div>
  );
};

export default FilteredOrdersTable;
