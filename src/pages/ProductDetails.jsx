import React, { useState } from "react";
import {
  Row,
  Col,
  Typography,
  Button,
  Rate,
  InputNumber,
  Tag,
  Space,
  Card,
} from "antd";
import {
  HeartOutlined,
  MinusOutlined,
  PlusOutlined,
  TruckOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import "../assets/style.css";
import TopBanner from "../components/TopBanner";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


const { Title, Text, Paragraph } = Typography;

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(
    "https://exclusive-ecommerce-one.vercel.app/Assets/Images/toy-removebg-preview.png"
  );

  const views = [
    {
      img: "https://exclusive-ecommerce-one.vercel.app/Assets/Images/toy-removebg-preview.png",
    },
    {
      img: "https://exclusive-ecommerce-one.vercel.app/Assets/Images/toy-removebg-preview.png",
    },
    {
      img: "https://exclusive-ecommerce-one.vercel.app/Assets/Images/toy-removebg-preview.png",
    },
    {
      img: "https://exclusive-ecommerce-one.vercel.app/Assets/Images/toy-removebg-preview.png",
    },
  ];

  const relatedItems = [
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      price: "$120",
      oldPrice: "$160",
      discount: "-40%",
      rating: 88,
      image:
        "https://exclusive-ecommerce-one.vercel.app/Assets/Images/toy-removebg-preview.png",
    },
    {
      id: 2,
      name: "AK-900 Wired Keyboard",
      price: "$960",
      oldPrice: "$1160",
      discount: "-35%",
      rating: 75,
      image:
        "https://exclusive-ecommerce-one.vercel.app/Assets/Images/toy-removebg-preview.png",
    },
    {
      id: 3,
      name: "IPS LCD Gaming Monitor",
      price: "$370",
      oldPrice: "$400",
      discount: "-30%",
      rating: 99,
      image:
        "https://exclusive-ecommerce-one.vercel.app/Assets/Images/toy-removebg-preview.png",
    },
    {
      id: 4,
      name: "RGB Liquid CPU Cooler",
      price: "$160",
      oldPrice: "$170",
      discount: "",
      rating: 65,
      image:
        "https://exclusive-ecommerce-one.vercel.app/Assets/Images/toy-removebg-preview.png",
    },
  ];

  return (
    <>
      <TopBanner />
      <NavBar />

      <div className="product-container">
        {/* ===== Product Section ===== */}
        <Row gutter={[32, 32]} justify="center">
          {/* Left Column - Views */}
          <Col xs={24} md={6} lg={4}>
            <div className="views-list">
              {views.map((view, index) => (
                <div
                  key={index}
                  className={`view-item ${
                    mainImage === view.img ? "active" : ""
                  }`}
                  onClick={() => setMainImage(view.img)}
                >
                  <img src={view.img} alt={view.name} className="view-thumb" />
                  <Text>{view.name}</Text>
                </div>
              ))}
            </div>
          </Col>

          {/* Middle Column - Main Image */}
          <Col xs={24} md={10} lg={8} className="center-image">
            <img src={mainImage} alt="Main" className="main-image" />
          </Col>

          {/* Right Column - Product Details */}
          <Col xs={24} md={8} lg={8}>
            <Title level={3}>Havic HV G-92 Gamepad</Title>
            <Space>
              <Rate disabled defaultValue={4} />
              <Text>(150 Reviews)</Text>
              <Tag color="green">In Stock</Tag>
            </Space>

            <Title level={3} className="price">
              $192.00
            </Title>

            <Paragraph>
              PlayStation 5 Controller Skin. High-quality vinyl with air channel
              adhesive for easy bubble-free install & mess-free removal.
              Pressure sensitive.
            </Paragraph>

            <div className="product-options">
              <Text strong>Colours:</Text>
              <Space className="color-options">
                <span className="color-circle red"></span>
                <span className="color-circle gray"></span>
              </Space>
            </div>

            <div className="product-options">
              <Text strong>Size:</Text>
              <Space>
                {["XS", "S", "M", "L", "XL"].map((s) => (
                  <Button key={s} className="size-btn">
                    {s}
                  </Button>
                ))}
              </Space>
            </div>

            <div className="quantity-row">
              <Button
                icon={<MinusOutlined />}
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              />
              <InputNumber
                min={1}
                value={quantity}
                readOnly
                className="qty-input"
              />
              <Button
                icon={<PlusOutlined />}
                onClick={() => setQuantity(quantity + 1)}
              />
              <Button type="primary" className="buy-btn">
                Buy Now
              </Button>
              <Button icon={<HeartOutlined />} />
            </div>

            <div className="delivery-info">
              <div className="delivery-card">
                <TruckOutlined />
                <div>
                  <Text strong>Free Delivery</Text>
                  <Paragraph type="secondary" style={{ margin: 0 }}>
                    Enter your postal code for Delivery Availability
                  </Paragraph>
                </div>
              </div>

              <div className="delivery-card">
                <ReloadOutlined />
                <div>
                  <Text strong>Return Delivery</Text>
                  <Paragraph type="secondary" style={{ margin: 0 }}>
                    Free 30 Days Delivery Returns. Details
                  </Paragraph>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* ===== Related Items Section ===== */}
        <div className="related-section">
          <Title level={4}>Related Items</Title>
          <Row gutter={[24, 24]}>
            {relatedItems.map((item) => (
              <Col xs={24} sm={12} md={6} key={item.id}>
                <Card
                  hoverable
                  className="related-card"
                  cover={
                    <div className="related-img-container">
                      {/* NEW: Favorite Icon element */}
                      <div className="favorite-icon">
                        {/* Replace the '❤️' with your actual icon component (e.g., from an icon library) */}
                        ❤️
                      </div>
                      <div className="eye-icon">
                        {/* Replace the 'eye' with your actual icon component (e.g., from an icon library) */}
                        👁️
                      </div>
                      {/* Existing Image and Add To Cart Overlay */}
                      <img alt={item.name} src={item.image} />
                      <div className="hover-overlay">Add To Cart</div>
                    </div>
                  }
                >
                  {item.discount && (
                    <Tag color="red" className="discount-tag">
                      {item.discount}
                    </Tag>
                  )}
                  <Title level={5}>{item.name}</Title>
                  <Space>
                    <Text className="price">{item.price}</Text>
                    <Text delete type="secondary">
                      {item.oldPrice}
                    </Text>
                  </Space>
                  <div>
                    <Rate disabled defaultValue={5} /> ({item.rating})
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
