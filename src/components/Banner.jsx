import { Row, Col, Typography, Button, Card } from "antd";
import "../assets/style.css";

const { Title, Text } = Typography;

const Banner = () => {
  return (
    <Row className="banner">
      {/* Left Side */}
      <Col className="banner-left" xs={24} md={12}>
        <Text className="category-text">Categories</Text>
        <Title level={2} className="banner-title">
          Enhance Your Music Experience
        </Title>

        {/* Countdown */}
        <div className="banner-countdown">
          <Card className="count-card">23<br />Hours</Card>
          <Card className="count-card">05<br />Days</Card>
          <Card className="count-card">59<br />Minutes</Card>
          <Card className="count-card">35<br />Seconds</Card>
        </div>

        <Button size="large" className="banner-button">
          Buy Now!
        </Button>
      </Col>

      {/* Right Side */}
      <Col className="banner-right" xs={24} md={12}>
        <img
          src="https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-deep-purple-220907_inline.jpg.large.jpg"
          alt="iPhone 14"
        />
      </Col>
    </Row>
  );
};

export default Banner;
