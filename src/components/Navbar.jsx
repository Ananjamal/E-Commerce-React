import React from "react";
import { Layout, Menu, Input, Badge, Space, Typography, Button } from "antd";
import { HeartOutlined, ShoppingCartOutlined, UserOutlined, SearchOutlined } from "@ant-design/icons";
import "../assets/style.css";

const { Header: AntHeader } = Layout;
const { Title } = Typography;
const { Search } = Input;

function Navbar() {
  return (
    <AntHeader className="custom-navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Title level={2} className="navbar-logo">
          Exclusive
        </Title>

        {/* Menu Items */}
        <Menu
          mode="horizontal"
          className="navbar-menu"
          items={[
            { key: "home", label: "Home" },
            { key: "contact", label: "Contact" },
            { key: "about", label: "About" },
            { key: "signup", label: "Sign Up" },
          ]}
        />

        {/* Search and Icons */}
        <Space size="middle" className="navbar-actions">
          <div className="search-container">
            <Input
              placeholder="What are you looking for?"
              className="navbar-search"
              prefix={<SearchOutlined />}
            />
          </div>
          <Badge count={3} className="icon-badge">
            <HeartOutlined className="navbar-icon" />
          </Badge>
          <Badge count={5} className="icon-badge">
            <ShoppingCartOutlined className="navbar-icon" />
          </Badge>
          <UserOutlined className="navbar-icon" />
        </Space>
      </div>
    </AntHeader>
  );
}

export default Navbar;