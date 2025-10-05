import React from "react";
import { Row, Col, Card, Typography, Button } from "antd";
import {
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
const { Title, Text } = Typography;
import { MobileOutlined, DesktopOutlined, CameraOutlined } from "@ant-design/icons";
import { FaGamepad, FaClock, FaHeadphones } from "react-icons/fa";  
import "../assets/style.css";

const categories = [
  { id: 1, name: "Phones", icon: <MobileOutlined /> },
  { id: 2, name: "Computers", icon: <DesktopOutlined /> },
  { id: 3, name: "SmartWatch", icon: <FaClock /> },
  { id: 4, name: "Camera", icon: <CameraOutlined /> },
  { id: 5, name: "HeadPhones", icon: <FaHeadphones /> }, 
  { id: 6, name: "Gaming", icon: <FaGamepad /> },
];

const Categories = () => (
  <div className="categories-section">
    <div className="flashsales-header">
        <Col>
          <div className="flashsales-top">
            <div className="red-block" />
            <Title level={5} className="todays-text">
              Categories
            </Title>
          </div>

          <Title level={2} className="flashsales-title">
            Browse by Category
          </Title>
        </Col>
       
        <div className="arrow-controls">
          <Button shape="circle" icon={<LeftOutlined />} />
          <Button shape="circle" icon={<RightOutlined />} />
        </div>
      </div>
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
