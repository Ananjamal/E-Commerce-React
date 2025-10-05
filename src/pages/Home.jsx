import React, { useState } from "react";
import { Row, Col, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import TopBanner from "../components/TopBanner";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";
import FlashSales from "../components/FlashSales";
import Categories from "../components/Categories";
import Banner from "../components/Banner";
import ExplorProducts from "../components/ExplorProducts";
import BestSellers from "../components/BestSellers";
import NewArrival from "../components/NewArrival";
import Footer from "../components/Footer";

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
        <Row gutter={[16, 16]}>
          <Col xs={0} lg={6}>
            <Sidebar />
          </Col>
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
              open={visible}
              width={260}
            >
              <Sidebar />
            </Drawer>
          </Col>

          <Col xs={24} lg={18}>
            <Hero />
          </Col>
          <Col xs={24}>
            <FlashSales />
            <Categories />
            <hr />
          </Col>

          <Col xs={24}>
            <BestSellers />
            <Banner />
            <ExplorProducts />
            <NewArrival />
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  );
}

export default Home;
