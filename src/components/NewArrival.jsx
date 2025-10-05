import React from 'react';
import { Row, Col, Typography, Button } from 'antd';
// Import the separate CSS file
import "../assets/style.css";
// Use AntD icons for the service section
import { TruckOutlined, CustomerServiceOutlined, DollarOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

// --- Helper Components for Clarity ---

const FeaturedCard = ({ title, description, className, isSmall = false }) => (
  <div className={`featured-card ${className} ${isSmall ? 'small' : ''}`}>
    <div className="card-content">
      <Title level={isSmall ? 5 : 4} className="card-title">{title}</Title>
      <Text className="card-description">{description}</Text>
      <div className="shop-now-container">
        <Button type="text" className="shop-now-button">Shop Now</Button>
      </div>
    </div>
  </div>
);

const ServiceCard = ({ icon: Icon, title, details }) => (
  <div className="service-card">
    <div className="service-icon"><Icon /></div>
    <Title level={5} className="service-title">{title}</Title>
    <Text className="service-details">{details}</Text>
  </div>
);


// --- Main Component ---

const NewArrivalsPage = () => {
  return (
    <div className="page-container">
      
      <div className="products-header-row">
        <Col>
          <div className="flashsales-top">
            <div className="red-block" />
            <Title level={5} className="todays-text">
              Featured
            </Title>
          </div>

          <Title level={2} className="flashsales-title">
            New Arrivals
          </Title>
        </Col>
        
      </div>


      <Row gutter={[24, 24]} className="main-grid">
        
        <Col xs={24} lg={12}>
          <FeaturedCard 
            title="PlayStation 5"
            description="Black and White version of the PS5 coming out on sale."
            className="ps5-card"
          />
        </Col>

        <Col xs={24} lg={12}>
          <Row gutter={[24, 24]}>
            <Col span={24}>
              <FeaturedCard 
                title="Women's Collections"
                description="Featured woman collections that give you another vibe."
                className="women-card"
              />
            </Col>
            
            <Col xs={24} sm={12}>
              <FeaturedCard 
                title="Speakers"
                description="Amazon wireless speakers"
                className="speakers-card"
                isSmall={true}
              />
            </Col>
            
            <Col xs={24} sm={12}>
              <FeaturedCard 
                title="Perfume"
                description="GUCCI INTENSE OUD EDP"
                className="perfume-card"
                isSmall={true}
              />
            </Col>
          </Row>
        </Col>
      </Row>

      <div className="services-section">
        <Row justify="center" gutter={40} className="services-row">
          <Col xs={24} md={8}>
            <ServiceCard 
              icon={TruckOutlined}
              title="FREE AND FAST DELIVERY"
              details="Free delivery for all orders over $140"
            />
          </Col>
          <Col xs={24} md={8}>
            <ServiceCard 
              icon={CustomerServiceOutlined}
              title="24/7 CUSTOMER SERVICE"
              details="Friendly 24/7 customer support"
            />
          </Col>
          <Col xs={24} md={8}>
            <ServiceCard 
              icon={DollarOutlined}
              title="MONEY BACK GUARANTEE"
              details="We return money within 30 days"
            />
          </Col>
        </Row>
      </div>

    </div>
  );
};

export default NewArrivalsPage;