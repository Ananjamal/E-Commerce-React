import { Row, Col, Card, Typography, Button, Tag } from "antd";

import "../assets/style.css";

const { Title, Text } = Typography;

const NewArrival = () => {
  return (
    <div className="new-arrival-section">
      {/* Main Featured Section */}
      <div className="products-header-row">
        <Col>
          <Tag color="red">Featured</Tag>
          <Title level={2} className="products-title">New Arrival</Title>
        </Col>
       
      </div>
      <Row gutter={[30, 30]} style={{ marginBottom: 80 }}>
        {/* PlayStation 5 - Main Card */}
        <Col xs={24} lg={12}>
          <Card 
            className="featured-card main-card ps5-bg"
            bodyStyle={{ padding: '40px', height: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
          >
            <div className="card-content">
              <Text className="featured-badge">PlayStation 5</Text>
              <Title level={1} className="featured-title">
                Black and White version of the PS5 coming out on sale.
              </Title>
              <Button className="shop-now-btn" size="large">
                Shop Now
              </Button>
            </div>
          </Card>
        </Col>

        {/* Right Side Cards */}
        <Col xs={24} lg={12}>
          <Row gutter={[30, 30]} style={{ height: '100%' }}>
            {/* Women's Collections */}
            <Col xs={24}>
              <Card 
                className="featured-card women-bg"
                bodyStyle={{ padding: '30px', height: '235px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
              >
                <div className="card-content">
                  <Text className="featured-badge">Women's Collections</Text>
                  <Title level={2} className="side-card-title">
                    Featured woman collections that give you another vibe.
                  </Title>
                  <Button className="shop-now-btn">
                    Shop Now
                  </Button>
                </div>
              </Card>
            </Col>

            {/* Bottom Small Cards */}
            <Col xs={24}>
              <Row gutter={[30, 30]}>
                {/* Speakers */}
                <Col xs={12}>
                  <Card 
                    className="featured-card speakers-bg"
                    bodyStyle={{ padding: '25px', height: '235px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                  >
                    <div className="card-content">
                      <Text className="featured-badge">Speakers</Text>
                      <Title level={3} className="small-card-title">
                        Amazon wireless speakers
                      </Title>
                      <Button className="shop-now-btn">
                        Shop Now
                      </Button>
                    </div>
                  </Card>
                </Col>

                {/* Perfume */}
                <Col xs={12}>
                  <Card 
                    className="featured-card perfume-bg"
                    bodyStyle={{ padding: '25px', height: '235px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                  >
                    <div className="card-content">
                      <Text className="featured-badge">Perfume</Text>
                      <Title level={3} className="small-card-title">
                        GUCCI INTENSE OUD
                      </Title>
                      <Button className="shop-now-btn">
                        Shop Now
                      </Button>
                    </div>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Services Section */}
      <Row gutter={[60, 40]} justify="center" className="services-section">
        <Col xs={24} md={8}>
          <div className="service-item">
            <div className="service-icon">🚚</div>
            <Title level={4} className="service-title">FREE AND FAST DELIVERY</Title>
            <Text className="service-description">
              Free delivery for all orders over $140
            </Text>
          </div>
        </Col>

        <Col xs={24} md={8}>
          <div className="service-item">
            <div className="service-icon">💬</div>
            <Title level={4} className="service-title">24/7 CUSTOMER SERVICE</Title>
            <Text className="service-description">
              Friendly 24/7 customer support
            </Text>
          </div>
        </Col>

        <Col xs={24} md={8}>
          <div className="service-item">
            <div className="service-icon">🛡️</div>
            <Title level={4} className="service-title">MONEY BACK GUARANTEE</Title>
            <Text className="service-description">
              We return money within 30 days
            </Text>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default NewArrival;