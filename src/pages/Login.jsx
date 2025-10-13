import React from "react";
import { Row, Col, Form, Input, Button, Typography } from "antd";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../assets/style.css"; 
import TopBanner from "../components/TopBanner";

const { Title, Text } = Typography;

const Login = () => {
  const onFinish = (values) => {
    console.log("Login data:", values);
    // Handle login logic here
  };

  return (
    <>
      <TopBanner />
      <Navbar />
      
      {/* login-wrapper and login-row manage the vertical space */}
      <div className="login-wrapper">
        <Row className="login-row" align="middle" justify="space-around">
          
          {/* Left Image Section: md={12} ensures 50% width */}
          <Col xs={0} md={12} className="login-left">
            <img
              src="https://media.licdn.com/dms/image/D5612AQGfObAJVIw7pg/article-cover_image-shrink_720_1280/0/1687248664396?e=2147483647&v=beta&t=_CIaLkKEQuhUVGnsdIIshoVSFsS061oY-x2IaMKYMjs" 
              alt="E-commerce login illustration: Smartphone, shopping cart, and bags"
              className="login-left-image" // This class has width: 100% and height: 100%
            />
          </Col>

          {/* Right Form Section: md={12} ensures 50% width and content is centered */}
          <Col xs={24} md={12} className="login-right">
            <div className="login-form-box">
              <Title level={3} className="login-title">
                Log in to Exclusive
              </Title>
              <Text type="secondary" className="login-subtitle">
                Enter your details below
              </Text>

              <Form
                name="login"
                onFinish={onFinish}
                className="login-form"
              >
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "Please input your email or phone number!" },
                  ]}
                >
                  <Input placeholder="Email or Phone Number" className="login-input" />
                </Form.Item>

                <Form.Item
                  name="password"
                  rules={[{ required: true, message: "Please input your password!" }]}
                >
                  <Input.Password placeholder="Password" className="login-input" />
                </Form.Item>

                <div className="login-actions">
                  <Button type="primary" htmlType="submit" className="login-btn">
                    Log In
                  </Button>
                  <a href="#" className="forgot-password">
                    Forgot Password?
                  </a>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  );
};

export default Login;