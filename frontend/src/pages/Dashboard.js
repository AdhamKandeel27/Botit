import React from 'react';
import { Card, Row, Col, Table } from 'antd';

const orderData = [
  { orderId: '1', customerName: 'John Doe', totalAmount: 100 },
  { orderId: '2', customerName: 'Jane Doe', totalAmount: 150 },
];

const productData = [
  { productId: '101', productName: 'Product A', price: 50, quantity: 2 },
  { productId: '102', productName: 'Product B', price: 30, quantity: 3 },
];

const Dashboard = () => {
  const orderColumns = [
    { title: 'Order ID', dataIndex: 'orderId', key: 'orderId' },
    { title: 'Customer Name', dataIndex: 'customerName', key: 'customerName' },
    { title: 'Total Amount', dataIndex: 'totalAmount', key: 'totalAmount' },
  ];

  const productColumns = [
    { title: 'Product ID', dataIndex: 'productId', key: 'productId' },
    { title: 'Product Name', dataIndex: 'productName', key: 'productName' },
    { title: 'Price', dataIndex: 'price', key: 'price' },
    { title: 'Quantity', dataIndex: 'quantity', key: 'quantity' },
  ];

  return (
    <div>
      <h2>Order Summary</h2>
      <Row gutter={16}>
        {orderData.map((order) => (
          <Col key={order.orderId} span={8}>
            <Card title={`Order ${order.orderId}`}>
              <p>Customer Name: {order.customerName}</p>
              <p>Total Amount: ${order.totalAmount}</p>
            </Card>
          </Col>
        ))}
      </Row>

      <h2 style={{ marginTop: 16 }}>Product Details</h2>
      <Table dataSource={productData} columns={productColumns} />
    </div>
  );
};

export default Dashboard;
