import React from "react";
import { Row, Col, Input, Button, Typography } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "../assets/style.css";

const { Title, Text } = Typography;

const Footer = () => {
  const socialIcons = [
    { icon: FaFacebookF, link: "https://facebook.com" },
    { icon: FaTwitter, link: "https://twitter.com" },
    { icon: FaInstagram, link: "https://instagram.com" },
    { icon: FaLinkedinIn, link: "https://linkedin.com" },
  ];

  return (
    <div className="footer">
      <Row gutter={[32, 32]}>
        {/* Exclusive */}
        <Col xs={24} sm={12} md={6}>
          <Title level={4} className="footer-title">Exclusive</Title>
          <Text className="footer-text-block">Subscribe</Text>
          <Text className="footer-text-block footer-text-small">Get 10% off your first order</Text>
          <div className="footer-subscribe">
            <Input placeholder="Enter your email" className="footer-input" />
            <Button type="primary" icon={<MailOutlined />} className="footer-btn" />
          </div>
        </Col>

        {/* Support */}
        <Col xs={24} sm={12} md={6}>
          <Title level={4} className="footer-title">Support</Title>
          <Text className="footer-text-block">111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh</Text>
          <Text className="footer-text-block mt-8">exclusive@gmail.com</Text>
          <Text className="footer-text-block mt-8">+88015-88888-9999</Text>
        </Col>

        {/* Account */}
        <Col xs={24} sm={12} md={4}>
          <Title level={4} className="footer-title">Account</Title>
          {["My Account", "Login / Register", "Cart", "Wishlist", "Shop"].map((item, i) => (
            <Text key={i} className="footer-text-block">{item}</Text>
          ))}
        </Col>

        {/* Quick Link */}
        <Col xs={24} sm={12} md={4}>
          <Title level={4} className="footer-title">Quick Link</Title>
          {["Privacy Policy", "Terms Of Use", "FAQ", "Contact"].map((item, i) => (
            <Text key={i} className="footer-text-block">{item}</Text>
          ))}
        </Col>

        {/* Download App */}
        <Col xs={24} sm={12} md={4}>
          <Title level={4} className="footer-title">Download App</Title>
          <Text className="footer-text-block footer-text-small">Save $3 with App New User Only</Text>
          <div className="footer-app">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/30/QR_code_for_mobile_English_Wikipedia.svg"
              alt="QR Code"
              className="footer-qr"
            />
            <div>
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  className="footer-badge"
                />
              </a>
              <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="App Store"
                  className="footer-badge"
                />
              </a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="footer-social">
            {socialIcons.map(({ icon: Icon, link }, i) => (
              <a key={i} href={link} target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </Col>
      </Row>

      {/* Copyright */}
      <div className="footer-copyright">
        <Text>© Copyright Rimel 2022. All rights reserved</Text>
      </div>
    </div>
  );
};

export default Footer;
