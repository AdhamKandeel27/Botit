


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
