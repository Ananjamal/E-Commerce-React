import React from 'react';
import { Layout, Row, Col, Input, Button, Space, Typography } from 'antd';
import { 
  SendOutlined, 
  FacebookFilled, 
  TwitterOutlined, 
  InstagramFilled, 
  LinkedinFilled 
} from '@ant-design/icons';

const { Text, Title } = Typography;
const { Footer: AntFooter } = Layout;

const linkStyle = { color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none' };
const headingStyle = { color: '#fff', fontSize: '20px', marginBottom: '30px', fontWeight: 500 };

const Footer = () => (
  <AntFooter 
    style={{ 
      backgroundColor: '#000', 
      color: '#fff', 
      padding: '80px 0 24px 0', 
      width: '100%',
      boxSizing: 'border-box'
    }}
  >
    <Row 
      gutter={[16, 40]} 
      justify="space-between" 
      style={{ width: '100%', padding: '0 60px' }}
    >
      {/* Exclusive */}
      <Col xs={24} sm={12} md={6} lg={5}>
        <Title level={4} style={headingStyle}>Exclusive</Title>
        <Text style={{ ...linkStyle, display: 'block', fontSize: '16px', marginBottom: '16px' }}>Subscribe</Text>
        <Text style={{ ...linkStyle, display: 'block', marginBottom: '16px' }}>Get 10% off your first order</Text>
        <Input
          placeholder="Enter your email"
          style={{ 
            backgroundColor: '#000', 
            border: '1px solid rgba(255, 255, 255, 0.7)', 
            color: '#fff',
            padding: '10px 0',
            borderRadius: '4px',
          }}
          suffix={
            <Button 
              type="text" 
              icon={<SendOutlined />} 
              style={{ color: '#fff', padding: '0 10px', fontSize: '16px' }} 
              aria-label="Subscribe"
            />
          }
        />
      </Col>

      {/* Support */}
      <Col xs={24} sm={12} md={6} lg={5}>
        <Title level={4} style={headingStyle}>Support</Title>
        <Space direction="vertical" size={4}>
          <Text style={{ ...linkStyle, fontSize: '14px' }}>111 Bijoy sarani, Dhaka,</Text>
          <Text style={{ ...linkStyle, fontSize: '14px' }}>DH 1515, Bangladesh.</Text>
          <Text style={{ ...linkStyle, fontSize: '14px', marginTop: '16px' }}>exclusive@gmail.com</Text>
          <Text style={{ ...linkStyle, fontSize: '14px' }}>+88015-8888-9999</Text>
        </Space>
      </Col>

      {/* Account */}
      <Col xs={24} sm={12} md={6} lg={5}>
        <Title level={4} style={headingStyle}>Account</Title>
        <Space direction="vertical" size={12}>
          <a href="#" style={linkStyle}>My Account</a>
          <a href="#" style={linkStyle}>Login / Register</a>
          <a href="#" style={linkStyle}>Cart</a>
          <a href="#" style={linkStyle}>Wishlist</a>
          <a href="#" style={linkStyle}>Shop</a>
        </Space>
      </Col>

      {/* Quick Link */}
      <Col xs={24} sm={12} md={6} lg={5}>
        <Title level={4} style={headingStyle}>Quick Link</Title>
        <Space direction="vertical" size={12}>
          <a href="#" style={linkStyle}>Privacy Policy</a>
          <a href="#" style={linkStyle}>Terms Of Use</a>
          <a href="#" style={linkStyle}>FAQ</a>
          <a href="#" style={linkStyle}>Contact</a>
        </Space>
      </Col>

      {/* Download App */}
      <Col xs={24} sm={12} md={6} lg={4}>
        <Title level={4} style={headingStyle}>Download App</Title>
        <Text style={{ ...linkStyle, display: 'block', marginBottom: '12px' }}>Save $3 with App New User Only</Text>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', marginBottom: '30px' }}>
          <div style={{ width: '80px', height: '80px', backgroundColor: '#fff' }}>
            <img 
              src="/path/to/your/qr_code.png"
              alt="Scan for App" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img 
                src="/path/to/google_play_badge.png" 
                alt="Get it on Google Play" 
                style={{ width: '130px', height: 'auto', display: 'block' }}
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img 
                src="/path/to/app_store_badge.png" 
                alt="Download on the App Store" 
                style={{ width: '130px', height: 'auto', display: 'block' }}
              />
            </a>
          </div>
        </div>
        <Space size="large">
          <Button type="link" href="#" icon={<FacebookFilled style={{ fontSize: '20px', color: '#fff' }} />} aria-label="Facebook" />
          <Button type="link" href="#" icon={<TwitterOutlined style={{ fontSize: '20px', color: '#fff' }} />} aria-label="Twitter" />
          <Button type="link" href="#" icon={<InstagramFilled style={{ fontSize: '20px', color: '#fff' }} />} aria-label="Instagram" />
          <Button type="link" href="#" icon={<LinkedinFilled style={{ fontSize: '20px', color: '#fff' }} />} aria-label="LinkedIn" />
        </Space>
      </Col>
    </Row>

    <div style={{ 
      borderTop: '1px solid rgba(255, 255, 255, 0.2)', 
      margin: '60px auto 16px auto', 
      width: '100%',
      padding: '0 60px' 
    }} />

    <div style={{ textAlign: 'center', opacity: 0.5 }}>
      <Text style={{ color: '#fff', fontSize: '14px' }}>© Copyright Rimel 2022. All right reserved</Text>
    </div>
  </AntFooter>
);

export default Footer;
