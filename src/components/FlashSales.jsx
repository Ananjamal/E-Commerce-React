import React from "react";
import { Row, Col, Button, Card } from "antd";
import { LeftOutlined, RightOutlined, HeartOutlined, EyeOutlined } from "@ant-design/icons";
import "../assets/style.css";

const products = [
  { id: 1, name: "HAVIT HV-G92 Gamepad", price: 120, old: 160, discount: "-40%", rating: 88, img: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-deep-purple-220907_inline.jpg.large.jpg" },
  { id: 2, name: "AK-900 Wired Keyboard", price: 960, old: 1160, discount: "-35%", rating: 75, img: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-deep-purple-220907_inline.jpg.large.jpg" },
  { id: 3, name: "IPS LCD Gaming Monitor", price: 370, old: 400, discount: "-30%", rating: 99, img: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-deep-purple-220907_inline.jpg.large.jpg" },
  { id: 4, name: "S-Series Comfort Chair", price: 375, old: 400, discount: "-25%", rating: 99, img: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-deep-purple-220907_inline.jpg.large.jpg" },
];

const FlashSales = () => {
  return (
    <div className="flashsales-section">
      <div className="flashsales-header">
        <p className="section-subtitle">Today's</p>
        <h2 className="section-title">Flash Sales</h2>
        <div className="countdown">
          <div><span>03</span><p>Days</p></div>
          <div><span>23</span><p>Hours</p></div>
          <div><span>19</span><p>Minutes</p></div>
          <div><span>56</span><p>Seconds</p></div>
        </div>
        <div className="arrow-controls">
          <Button shape="circle" icon={<LeftOutlined />} />
          <Button shape="circle" icon={<RightOutlined />} />
        </div>
      </div>

      <Row gutter={[16, 16]}>
        {products.map((item) => (
          <Col xs={24} sm={12} md={6} key={item.id}>
            <Card
              hoverable
              className="product-card"
              cover={<img src={item.img} alt={item.name} className="product-img" />}
              actions={[
                <HeartOutlined key="fav" />,
                <EyeOutlined key="view" />,
              ]}
            >
              <span className="discount-badge">{item.discount}</span>
              <h4>{item.name}</h4>
              <p>
                <span className="price">${item.price}</span>
                <span className="old-price">${item.old}</span>
              </p>
              <p className="rating">⭐ {item.rating}</p>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="center-btn">
        <Button className="view-all-btn">View All Products</Button>
      </div>
    </div>
  );
};

export default FlashSales;
