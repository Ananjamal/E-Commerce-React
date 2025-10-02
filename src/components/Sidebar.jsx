import React from "react";
import { Menu } from "antd";
import "../assets/style.css";

const Sidebar = () => (
  <div className="sidebar-container">
    <Menu mode="vertical" className="sidebar-menu">
      <Menu.Item>Woman's Fashion</Menu.Item>
      <Menu.Item>Men's Fashion</Menu.Item>
      <Menu.Item>Electronics</Menu.Item>
      <Menu.Item>Home & Lifestyle</Menu.Item>
      <Menu.Item>Medicine</Menu.Item>
      <Menu.Item>Sports & Outdoor</Menu.Item>
      <Menu.Item>Baby's & Toys</Menu.Item>
      <Menu.Item>Groceries & Pets</Menu.Item>
      <Menu.Item>Health & Beauty</Menu.Item>
    </Menu>
  </div>
);

export default Sidebar;
