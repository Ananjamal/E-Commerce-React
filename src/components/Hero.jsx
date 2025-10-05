import React from "react";
import { Button, Row, Col } from "antd";
import "../assets/style.css";

const Hero = () => (
  <div className="hero-section">
    <Row gutter={[24, 24]} align="middle" className="hero-row">
      <Col xs={24} md={12} className="hero-content">
        <p className="hero-subtitle">iPhone 14 Series</p>
        <h1 className="hero-title">Up to 10% off Voucher</h1>
        <Button className="shop-now-btn">
          Shop Now →
        </Button>
      </Col>
      <Col xs={24} md={12} className="hero-image-container">
        <img
          src="https://www.gadgetpilipinas.net/wp-content/uploads/2022/09/Apple-iPhone-14-Pro-and-Pro-Max-banner-770x433.jpg"
          alt="iPhone 14"
          className="hero-image"
        />
      </Col>
    </Row>
  </div>
);

export default Hero;
