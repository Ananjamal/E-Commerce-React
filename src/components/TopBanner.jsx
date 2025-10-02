import React from "react";
import { Row, Col } from "antd";
import "../assets/style.css";

const TopBanner = () => (
  <div className="top-banner">
    <Row justify="space-between" align="middle" className="top-banner-container">
      <Col xs={24} md={16}>
        <span className="top-banner-text">
          Summer Sale For All Swim Suits And Free Express Delivery – OFF 50%!{" "}
          <span className="shop-now-link">Shop Now</span>
        </span>
      </Col>
      <Col xs={24} md={8} style={{ textAlign: "right" }}>
        <select defaultValue="English" className="language-select">
          <option value="English">English</option>
          <option value="Arabic">Arabic</option>
        </select>
      </Col>
    </Row>
  </div>
);

export default TopBanner;
