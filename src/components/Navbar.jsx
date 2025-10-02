import React from "react";
import { Menu, Input, Row, Col } from "antd";
import { FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";
import "../assets/style.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Row justify="space-between" align="middle" className="navbar-container">
        {/* Logo */}
        <Col xs={24} lg={4}>
          <h1 className="navbar-title">Exclusive</h1>
        </Col>

        {/* Menu visible on all screens */}
        <Col xs={24} lg={12}>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={["home"]}
            className="navbar-menu"
          >
            <Menu.Item key="home">Home</Menu.Item>
            <Menu.Item key="contact">Contact</Menu.Item>
            <Menu.Item key="about">About</Menu.Item>
            <Menu.Item key="signup">Sign Up</Menu.Item>
          </Menu>
        </Col>

        {/* Search + Icons */}
        <Col xs={24} lg={8}>
          <Row gutter={12} justify="end" align="middle">
            <Col flex="auto">
              <Input
                placeholder="What are you looking for?"
                suffix={<FaSearch />}
                className="search-input"
              />
            </Col>
            <Col>
              <FaHeart className="icon" />
            </Col>
            <Col>
              <FaShoppingCart className="icon" />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Navbar;
