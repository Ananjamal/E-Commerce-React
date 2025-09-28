import React from "react";
import { Row, Col, Typography } from "antd";
import "../assets/style.css"; 

const { Title, Text } = Typography;

function Footer() {
  return (
    <footer className="custom-footer">
      <Row gutter={[16, 16]}>
        <Col xs={24} md={6}>
          <Title level={4} className="footer-title">
            Exclusive
          </Title>
          <Text className="footer-text">Subscribe</Text>
        </Col>
        <Col xs={24} md={6}>
          <Title level={4} className="footer-title">
            Support
          </Title>
          <Text className="footer-text">111 Bijoy Sarani, Dhaka, Bangladesh</Text>
        </Col>
        <Col xs={24} md={6}>
          <Title level={4} className="footer-title">
            Account
          </Title>
          <Text className="footer-text">My Account</Text>
        </Col>
        <Col xs={24} md={6}>
          <Title level={4} className="footer-title">
            Quick Link
          </Title>
          <Text className="footer-text">Privacy Policy</Text>
        </Col>
      </Row>

      <Text className="footer-copy" style={{ display: "block", textAlign: "center", marginTop: "16px" }}>
        © 2025 Exclusive. All rights reserved
      </Text>
    </footer>
  );
}

export default Footer;
