import React from "react";
import { Row, Col, Card, Typography } from "antd";
import "../assets/style.css"; 

const { Title, Text } = Typography;

const items = ["Shirt", "Shoes", "Bag", "Glasses"];

function ExploreProducts() {
  return (
    <section className="explore-products-section">
      <Title level={3} className="explore-products-title">
        Explore Our Products
      </Title>

      <Row gutter={[16, 16]}>
        {items.map((item, i) => (
          <Col xs={12} sm={12} md={6} key={i}>
            <Card className="explore-products-card" hoverable>
              <div className="explore-products-image"></div>
              <Text className="explore-products-name">{item}</Text>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default ExploreProducts;
