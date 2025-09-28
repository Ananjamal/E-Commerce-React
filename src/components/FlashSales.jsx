import React from "react";
import { Row, Col, Card, Typography } from "antd";
import "../assets/style.css"; 

const { Title, Text } = Typography;

const products = [
  { id: 1, name: "HAVIT Gamepad", price: "$120", old: "$160" },
  { id: 2, name: "AK-900 Keyboard", price: "$960", old: "$1160" },
];

function FlashSales() {
  return (
    <section className="flash-sales-section">
      <Title level={3} className="flash-sales-title">
        Flash Sales
      </Title>

      <Row gutter={[16, 16]}>
        {products.map((p) => (
          <Col xs={12} sm={12} md={6} key={p.id}>
            <Card className="flash-sales-card" hoverable>
              <div className="flash-sales-image"></div>
              <Title level={4} className="flash-sales-name">{p.name}</Title>
              <Text className="flash-sales-price">
                {p.price}{" "}
                <span className="flash-sales-old">{p.old}</span>
              </Text>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default FlashSales;
