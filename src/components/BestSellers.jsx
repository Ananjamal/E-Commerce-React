import React from "react";
import { Row, Col, Card, Typography } from "antd";
import "../assets/style.css"; 

const { Title, Text } = Typography;

const items = ["Laptop", "Camera", "Phone", "Watch"];

function BestSellers() {
  return (
    <section className="best-sellers-section">
      <Title level={3} className="best-sellers-title">
        Best Selling Products
      </Title>

      <Row gutter={[16, 16]}>
        {items.map((item, i) => (
          <Col xs={12} sm={12} md={6} key={i}>
            <Card className="best-sellers-card" hoverable>
              <div className="best-sellers-image"></div>
              <Text className="best-sellers-name">{item}</Text>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default BestSellers;
