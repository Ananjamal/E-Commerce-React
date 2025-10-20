import React from "react";
import { Menu, Input, Row, Col } from "antd";
import { FaHeart, FaShoppingCart, FaSearch, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import "../assets/style.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <Row justify="space-between" align="middle" className="navbar-container">
        <Col xs={24} lg={4}>
          <h1 className="navbar-title" onClick={() => navigate("/")}>
            Exclusive
          </h1>
        </Col>

        <Col xs={24} lg={12}>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={["home"]}
            className="navbar-menu"
            onClick={(e) => navigate(`${e.key}`)} // e.key is "signup", "home", etc.
          >
            <Menu.Item key="/">Home</Menu.Item>
            <Menu.Item key="contact">Contact</Menu.Item>
            <Menu.Item key="about">About</Menu.Item>
            <Menu.Item key="signup">Sign Up</Menu.Item>
          </Menu>
        </Col>

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
              <FaShoppingCart
                onClick={() => navigate("/cart")}
                className="icon"
              />
            </Col>
            <Col>
              <FaUser className="icon" /> {/* Added account icon */}
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Navbar;
