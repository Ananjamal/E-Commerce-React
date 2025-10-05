import React from 'react';
import { Layout, Row, Col, Input, Button, Space, Typography } from 'antd';
import {
  SendOutlined,
  FacebookFilled,
  TwitterOutlined,
  InstagramFilled,
  LinkedinFilled,
} from '@ant-design/icons';
import '../assets/style.css'; 

const { Text, Title } = Typography;
const { Footer: AntFooter } = Layout;

const Footer = () => (
  <AntFooter className="footer-container">
    <Row gutter={[0, 30]} justify="space-between" className="footer-row">
      
      <Col xs={24} sm={12} md={6} lg={5}>
        <Title level={4} className="footer-heading">Exclusive</Title>
        <Text className="footer-text">Subscribe & Get 10% Off Your First Order</Text>
        <Input
          placeholder="Enter your email"
          className="footer-input"
          suffix={
            <Button
              type="text"
              icon={<SendOutlined />}
              className="footer-send-btn"
              aria-label="Subscribe"
            />
          }
        />
      </Col>

      <Col xs={24} sm={12} md={6} lg={5}>
        <Title level={4} className="footer-heading">Support</Title>
        <Space direction="vertical" size={4}>
          <Text className="footer-text">111 Bijoy Sarani, Dhaka,</Text>
          <Text className="footer-text">DH 1515, Bangladesh</Text>
          <Text className="footer-text">exclusive@gmail.com</Text>
          <Text className="footer-text">+88015-8888-9999</Text>
        </Space>
      </Col>

      <Col xs={24} sm={12} md={6} lg={5}>
        <Title level={4} className="footer-heading">Account</Title>
        <Space direction="vertical" size={12}>
          <a href="#" className="footer-link">My Account</a>
          <a href="#" className="footer-link">Login / Register</a>
          <a href="#" className="footer-link">Cart</a>
          <a href="#" className="footer-link">Wishlist</a>
          <a href="#" className="footer-link">Shop</a>
        </Space>
      </Col>

      <Col xs={24} sm={12} md={6} lg={5}>
        <Title level={4} className="footer-heading">Quick Link</Title>
        <Space direction="vertical" size={12}>
          <a href="#" className="footer-link">Privacy Policy</a>
          <a href="#" className="footer-link">Terms Of Use</a>
          <a href="#" className="footer-link">FAQ</a>
          <a href="#" className="footer-link">Contact</a>
        </Space>
      </Col>

      <Col xs={24} sm={12} md={6} lg={4}>
        <Title level={4} className="footer-heading">Download App</Title>
        <Text className="footer-text">Save $3 for new users only</Text>

        <div className="app-download">
          <div className="qr-box">
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://yourapp.com"
              alt="Scan for App"
            />
          </div>
          <div className="store-links">
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
            </a>
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
              <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" />
            </a>
          </div>
        </div>

        <Space size="large" className="social-icons">
          <Button type="link" icon={<FacebookFilled />} className="footer-icon" />
          <Button type="link" icon={<TwitterOutlined />} className="footer-icon" />
          <Button type="link" icon={<InstagramFilled />} className="footer-icon" />
          <Button type="link" icon={<LinkedinFilled />} className="footer-icon" />
        </Space>
      </Col>
    </Row>

    <div className="footer-divider" />
    <div className="footer-bottom">
      <Text>© Copyright Rimel 2022. All rights reserved</Text>
    </div>
  </AntFooter>
);

export default Footer;
