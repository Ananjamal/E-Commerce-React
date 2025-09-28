import React from "react";
import { Row, Col, Card, Typography } from "antd";
import "../assets/style.css"; 

const { Text, Title } = Typography;

const cats = ["Phones", "Computers", "SmartWatch", "Camera", "Headphones"];

function Categories() {
  return (
    <section className="categories-section">
      <Title level={3} className="categories-title">
        Browse By Category
      </Title>

      <Row gutter={[16, 16]}>
        {cats.map((c, i) => (
          <Col xs={12} sm={12} md={4} key={i}>
            <Card className="categories-card" hoverable>
              <Text>{c}</Text>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default Categories;
