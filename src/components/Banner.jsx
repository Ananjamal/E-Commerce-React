import { Row, Col, Typography, Button } from "antd";
import "../assets/style.css";

const { Title, Text } = Typography;

const Banner = () => {
  return (
    <Row className="banner">
      {/* Left Side */}
      <Col className="banner-left" xs={24} md={12}>
        <Text className="category-text">Categories</Text>
        <Title level={1} className="banner-title">
          Enhance Your Music Experience
        </Title>

        {/* Countdown */}
        <div className="banner-countdown">
          <div className="count-card"><span>23</span>Hours</div>
          <div className="count-card"><span>05</span>Days</div>
          <div className="count-card"><span>59</span>Minutes</div>
          <div className="count-card"><span>35</span>Seconds</div>
        </div>

        <Button size="large" className="banner-button">
          Buy Now!
        </Button>
      </Col>

      {/* Right Side */}
      <Col className="banner-right" xs={24} md={12}>
        <img
  src="https://cdn.thewirecutter.com/wp-content/media/2024/03/computer-speaker-2048px-3550.jpg"
  alt="JBL Boombox 3"
/>

      </Col>
    </Row>
  );
};

export default Banner;
