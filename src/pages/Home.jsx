import React, { useState } from "react";
import { Row, Col, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import TopBanner from "../components/TopBanner";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";
import "../assets/style.css";

function Home() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => setVisible(true);
  const onClose = () => setVisible(false);

  return (
    <>
      <TopBanner />
      <Navbar />
      
      <div className="main-container">
        <Row gutter={[32, 32]}>
          {/* Sidebar for large screens */}
          <Col xs={0} md={6}>
            <Sidebar />
          </Col>

          {/* Drawer Sidebar for small screens */}
          <Col xs={24} md={0}>
            <Button type="primary" onClick={showDrawer} className="mobile-menu-btn">
              <MenuOutlined /> 
            </Button>
            <Drawer
              title="Categories"
              placement="left"
              onClose={onClose}
              visible={visible}
              width={280}
            >
              <Sidebar />
            </Drawer>
          </Col>

          {/* Hero Section */}
          <Col xs={24} md={18}>
            <Hero />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Home;