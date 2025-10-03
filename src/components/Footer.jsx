import { Row, Col, Typography, Input, Button, Divider } from "antd";
import "../assets/style.css";

const { Title, Text } = Typography;

const Footer = () => {
  return (
    <div className="footer-section">
      {/* Exclusive Subscribe Section */}
      <div className="subscribe-section">
        <Row gutter={[24, 16]} align="middle">
          <Col xs={24} md={4}>
            <Title level={1} className="exclusive-title">Exclusive</Title>
          </Col>
          <Col xs={24} md={4}>
            <Title level={2} className="subscribe-title">Subscribe</Title>
          </Col>
          <Col xs={24} md={6}>
            <Text className="subscribe-text">Get 10% off your first order</Text>
          </Col>
          <Col xs={24} md={8}>
            <div className="email-input-container">
              <Input 
                placeholder="Enter your email" 
                className="email-input"
              />
              <Button type="primary" className="subscribe-btn">
                →
              </Button>
            </div>
          </Col>
        </Row>
      </div>

      <Divider className="footer-divider" />

      <Row gutter={[40, 40]} className="footer-content">
        {/* Support Column */}
        <Col xs={24} md={5}>
          <Title level={4} className="footer-column-title">Support</Title>
          <div className="footer-info">
            <Text className="footer-address">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </Text>
            <Text className="footer-contact">
              exclusive@gmail.com
            </Text>
            <Text className="footer-contact">
              +88015-88888-9999
            </Text>
          </div>
        </Col>

        {/* Account Column */}
        <Col xs={24} md={5}>
          <Title level={4} className="footer-column-title">Account</Title>
          <div className="account-table">
            <div className="table-row">
              <Text className="table-cell">My Account</Text>
              <Text className="table-cell">Privacy Policy</Text>
            </div>
            <div className="table-row">
              <Text className="table-cell">Login / Register</Text>
              <Text className="table-cell">Terms of Use</Text>
            </div>
            <div className="table-row">
              <Text className="table-cell">Cart</Text>
              <Text className="table-cell">FAQ</Text>
            </div>
            <div className="table-row">
              <Text className="table-cell">Wishlist</Text>
              <Text className="table-cell">Contact</Text>
            </div>
            <div className="table-row">
              <Text className="table-cell">Shop</Text>
              <Text className="table-cell"></Text>
            </div>
          </div>
        </Col>

        {/* Quick Link Column */}
        <Col xs={24} md={4}>
          <Title level={4} className="footer-column-title">Quick Link</Title>
          <div className="quick-links">
            <Text className="footer-link">Privacy Policy</Text>
            <Text className="footer-link">Terms of Use</Text>
            <Text className="footer-link">FAQ</Text>
            <Text className="footer-link">Contact</Text>
          </div>
        </Col>

        {/* Download App Column */}
        <Col xs={24} md={5}>
          <Title level={4} className="footer-column-title">Download App</Title>
          <div className="download-app">
            <Text className="app-offer">Save $3 with App New User Only</Text>
            <div className="app-stores">
              <div className="app-store">Google Play</div>
              <div className="app-store">Android Apps</div>
              <div className="app-store">App Store</div>
            </div>
          </div>
        </Col>

        {/* Empty Column for 5th column */}
        <Col xs={24} md={5}>
          {/* Empty column for spacing or additional content */}
        </Col>
      </Row>

      <Divider className="footer-divider" />

      {/* Copyright */}
      <div className="copyright-section">
        <Text className="copyright-text">
          © Copyright Rimel 2022. All right reserved.
        </Text>
      </div>
    </div>
  );
};

export default Footer;