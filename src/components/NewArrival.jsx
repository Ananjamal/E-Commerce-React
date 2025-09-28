import React from "react";
import { Row, Col, Card, Typography } from "antd";
import "../assets/style.css"; 

const { Title, Text } = Typography;

function NewArrival() {
  const products = [1, 2, 3, 4];

  return (
    <section className="new-arrival-section">
      <Title level={3} className="new-arrival-title">
        New Arrival
      </Title>

      <Row gutter={[16, 16]}>
        {products.map((i) => (
          <Col xs={12} sm={12} md={6} key={i}>
            <Card className="product-card" hoverable>
              <div className="product-image"></div>
              <Text className="product-name">New Product {i}</Text>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default NewArrival;
