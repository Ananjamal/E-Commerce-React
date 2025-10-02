import React, { useState } from "react";
import { Row, Col, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import TopBanner from "../components/TopBanner";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";
import FlashSales from "../components/FlashSales";
import Categories from "../components/Categories";
import "../assets/style.css";
import Banner from "../components/Banner";
import ExplorProducts from "../components/ExplorProducts";

function Home() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => setVisible(true);
  const onClose = () => setVisible(false);

  return (
    <>
      <TopBanner />
      <Navbar />

      <div className="main-container">
        <Row gutter={[16, 16]}>
          {/* Sidebar for large screens */}
          <Col xs={0} lg={6}>
            <Sidebar />
          </Col>

          {/* Drawer Sidebar for small screens */}
          <Col xs={24} lg={0}>
            <Button
              type="primary"
              onClick={showDrawer}
              className="mobile-menu-btn"
            >
              <MenuOutlined />
            </Button>
            <Drawer
              title="Categories"
              placement="left"
              onClose={onClose}
              open={visible} // AntD v5 uses "open"
              width={260}
            >
              <Sidebar />
            </Drawer>
          </Col>

          {/* Hero Section */}
          <Col xs={24} lg={18}>
            <Hero />
          </Col>
          <Col xs={24}>
            <FlashSales />
            <Categories />
          </Col>
          <Col xs={24}>
            <ExplorProducts />
            <Banner />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Home;
