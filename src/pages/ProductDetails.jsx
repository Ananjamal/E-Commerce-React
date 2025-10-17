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
      img: "data:image/jpeg;base64,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",
    },
    {
      img: "https://exclusive-ecommerce-one.vercel.app/Assets/Images/toy-removebg-preview.png",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj4engqH5lx93sBte-B7M1q7ni2PSTf8F7QQ&s",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDuyJ4CcI-5BzhtRaT-x8FDPsgu52Q7DXGBQ&s",
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
        <Row gutter={[220, 64]} justify="center">
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
          <Col className="center-image">
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
              {/* <Text> is likely an inline element (like <span>) or you'll need Flexbox */}
              <Text strong>Colours:</Text>

              {/* <Space> is likely a block or flex container and will line up next to the <Text> */}
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
