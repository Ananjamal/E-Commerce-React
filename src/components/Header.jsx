import React from "react";
import { Layout, Typography, Space } from "antd";
import "../assets/style.css";

const { Header: AntHeader } = Layout;
const { Text, Link } = Typography;

function Header() {
  return (
    <AntHeader className="custom-header">
      <div className="header-container">
        <Text className="header-text">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <Link href="#" className="shop-now-link">Shop Now</Link>
        </Text>

        <Space size="middle" className="header-links">
          <Link href="#" className="link-text">
            English
          </Link>
          <Link href="#" className="link-text">
            Sign In / Sign Up
          </Link>
        </Space>
      </div>
    </AntHeader>
  );
}

export default Header;