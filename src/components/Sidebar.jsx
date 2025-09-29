import React from "react";
import { Menu } from "antd";
import "../assets/style.css";

const Sidebar = () => (
  <div className="sidebar-container">
    <Menu mode="vertical" className="sidebar-menu">
      <Menu.Item className="menu-item">Woman's Fashion</Menu.Item>
      <Menu.Item className="menu-item">Men's Fashion</Menu.Item>
      <Menu.Item className="menu-item">Electronics</Menu.Item>
      <Menu.Item className="menu-item">Home & Lifestyle</Menu.Item>
      <Menu.Item className="menu-item">Medicine</Menu.Item>
      <Menu.Item className="menu-item">Sports & Outdoor</Menu.Item>
      <Menu.Item className="menu-item">Baby's & Toys</Menu.Item>
      <Menu.Item className="menu-item">Groceries & Pets</Menu.Item>
      <Menu.Item className="menu-item">Health & Beauty</Menu.Item>
    </Menu>
  </div>
);

export default Sidebar;