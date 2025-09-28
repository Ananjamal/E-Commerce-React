import React from "react";
import { Row, Col, Button, Typography, Card } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import "../assets/style.css";

const { Title, Paragraph } = Typography;

function HeroBanner() {
  return (
    <section className="hero-banner">
      <Row align="middle" gutter={[32, 32]}>
        {/* Left Side - Categories */}
        <Col xs={24} md={6}>
          <Card className="categories-sidebar">
            <div className="category-item">Women's Fashion</div>
            <div className="category-item">Men's Fashion</div>
            <div className="category-item">Electronics</div>
            <div className="category-item">Home & Lifestyle</div>
            <div className="category-item">Medicine</div>
            <div className="category-item">Sports & Outdoor</div>
            <div className="category-item">Baby's & Toys</div>
            <div className="category-item">Groceries & Pets</div>
            <div className="category-item">Health & Beauty</div>
          </Card>
        </Col>

        {/* Center - Main Banner */}
        <Col xs={24} md={12}>
          <div className="main-banner">
            <div className="banner-content">
              <div className="banner-badge">
                <img src="/apple.png" alt="Apple" className="brand-logo" />
                <span>iPhone 14 Series</span>
              </div>
              <Title level={1} className="hero-title">
                Up to 10% off Voucher
              </Title>
              <Button type="primary" size="large" className="shop-now-btn">
                Shop Now <ArrowRightOutlined />
              </Button>
            </div>
          </div>
        </Col>

        {/* Right Side - Features */}
        <Col xs={24} md={6}>
          <div className="features-sidebar">
            <div className="feature-card">
              <div className="feature-icon">🎁</div>
              <div className="feature-content">
                <div className="feature-title">THE AND FAST GLUVIKY</div>
                <div className="feature-desc">Not oblivious, or does not this</div>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <div className="feature-content">
                <div className="feature-title">24/7 CUSTOMER SERVICE</div>
                <div className="feature-desc">Travel with customer expert</div>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <div className="feature-content">
                <div className="feature-title">MONEY BACK GUARANTEE</div>
                <div className="feature-desc">Without many visits though</div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default HeroBanner;