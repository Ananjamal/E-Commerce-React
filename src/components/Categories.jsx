import React from "react";
import { Card, Row, Col } from "antd";
import { MobileOutlined, DesktopOutlined, CameraOutlined } from "@ant-design/icons";
import { FaGamepad, FaClock, FaHeadphones } from "react-icons/fa";  // ✅ use FaHeadphones instead
import "../assets/style.css";

const categories = [
  { id: 1, name: "Phones", icon: <MobileOutlined /> },
  { id: 2, name: "Computers", icon: <DesktopOutlined /> },
  { id: 3, name: "SmartWatch", icon: <FaClock /> },
  { id: 4, name: "Camera", icon: <CameraOutlined /> },
  { id: 5, name: "HeadPhones", icon: <FaHeadphones /> }, // ✅ fixed
  { id: 6, name: "Gaming", icon: <FaGamepad /> },
];

const Categories = () => (
  <div className="categories-section">
    <p className="section-subtitle">Categories</p>
    <h2 className="section-title">Browse By Category</h2>

    <Row gutter={[16, 16]} justify="center">
      {categories.map((cat) => (
        <Col xs={12} sm={8} md={4} key={cat.id}>
          <Card className="category-card" hoverable>
            <div className="category-icon">{cat.icon}</div>
            <p className="category-name">{cat.name}</p>
          </Card>
        </Col>
      ))}
    </Row>
  </div>
);

export default Categories;
