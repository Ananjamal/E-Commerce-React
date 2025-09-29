import React, { useState } from "react";
import { Menu, Input, Row, Col, Button, Drawer } from "antd";
import { FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";
import { MenuOutlined } from "@ant-design/icons";
import "../assets/style.css";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => setVisible(true);
  const onClose = () => setVisible(false);

  return (
    <div className="navbar">
      <Row justify="space-between" align="middle" className="navbar-container">
        <Col>
          <h1 className="navbar-title">Exclusive</h1>
        </Col>

        <Col xs={0} md={12}>
          <Menu mode="horizontal" defaultSelectedKeys={["home"]} className="navbar-menu">
            <Menu.Item key="home">Home</Menu.Item>
            <Menu.Item key="contact">Contact</Menu.Item>
            <Menu.Item key="about">About</Menu.Item>
            <Menu.Item key="signup">Sign Up</Menu.Item>
          </Menu>
        </Col>

        <Col xs={0} md={6}>
          <Row gutter={16} justify="end" align="middle">
            <Col>
              <Input 
                placeholder="What are you looking for?" 
                suffix={<FaSearch />} 
                className="search-input"
              />
            </Col>
            <Col><FaHeart className="icon" /></Col>
            <Col><FaShoppingCart className="icon" /></Col>
          </Row>
        </Col>

        <Col xs={24} md={0} style={{ textAlign: "right" }}>
          <Button type="primary" onClick={showDrawer} className="mobile-menu-btn">
            <MenuOutlined />
          </Button>
          <Drawer placement="right" onClose={onClose} visible={visible}>
            <Menu mode="vertical">
              <Menu.Item key="home">Home</Menu.Item>
              <Menu.Item key="contact">Contact</Menu.Item>
              <Menu.Item key="about">About</Menu.Item>
              <Menu.Item key="signup">Sign Up</Menu.Item>
            </Menu>
          </Drawer>
        </Col>
      </Row>
    </div>
  );
};

export default Navbar;