import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Card, Typography, Button, message } from "antd";
import { LeftOutlined, RightOutlined, HeartOutlined, EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import "../assets/style.css";

import { fetchProductsRequest } from "../redux/products/productActions";
import { addItemToCartRequest, fetchCartItemsRequest } from "../redux/cart/cartActions";

const { Title } = Typography;

const FlashSales = () => {
  const [msg, ctx] = message.useMessage();
  const dispatch = useDispatch();
  const { products = [], loading, error } = useSelector((s) => s.products);
  const { items: cart = {} } = useSelector((s) => s.cart);

  useEffect(() => {
    dispatch(fetchProductsRequest());
    dispatch(fetchCartItemsRequest());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    const current = cart.products || [];
    const existing = current.find((p) => p.productId === product.id);
    let updated = [];

    if (existing) {
      updated = current.map((p) =>
        p.productId === product.id
          ? { ...p, quantity: p.quantity + 1 }
          : p
      );
      msg.info(`${product.name || product.title} quantity updated in cart!`);
    } else {
      updated = [...current, { productId: product.id, quantity: 1 }];
      msg.success(`${product.name || product.title} added to cart!`);
    }

    const payload = {
      userId: 1,
      date: new Date().toISOString().split("T")[0],
      products: updated,
    };

    dispatch(addItemToCartRequest(payload));
  };

  // Shuffle products and pick 4, add default discount if missing
  const processedProducts = products
    .map((p) => ({
      ...p,
      discount: p.discount || "-20%",
      old: p.old || Math.round(p.price * 1.2),
    }))
    .slice(0, 4);

  if (loading)
    return (
      <div className="flashsales-section center">
        <div>Loading products...</div>
      </div>
    );

  if (error)
    return (
      <div className="flashsales-section center" style={{ color: "#ff4d4f" }}>
        <div>Error loading products: {error}</div>
        <Button type="primary" onClick={() => dispatch(fetchProductsRequest())}>
          Retry
        </Button>
      </div>
    );

  return (
    <div className="flashsales-section">
      {ctx}
      <div className="flashsales-header">
        <Col>
          <div className="flashsales-top">
            <div className="red-block" />
            <Title level={5} className="todays-text">
              Today's
            </Title>
          </div>
          <Title level={2} className="flashsales-title">
            Flash Sales
          </Title>
        </Col>
        <div className="countdown">
          <div>
            <span>03</span>
            <p>Days</p>
          </div>
          <div>
            <span>23</span>
            <p>Hours</p>
          </div>
          <div>
            <span>19</span>
            <p>Minutes</p>
          </div>
          <div>
            <span>56</span>
            <p>Seconds</p>
          </div>
        </div>
        <div className="arrow-controls">
          <Button shape="circle" icon={<LeftOutlined />} />
          <Button shape="circle" icon={<RightOutlined />} />
        </div>
      </div>

      <Row gutter={[16, 16]}>
        {processedProducts.map((item) => (
          <Col xs={24} sm={12} md={6} key={item.id}>
            <Card
              hoverable
              className="product-card"
              cover={<img src={item.image || item.img} alt={item.name || item.title} className="product-img" />}
              actions={[
                <HeartOutlined key="fav" />,
                <EyeOutlined key="view" />,
                <ShoppingCartOutlined key="cart" onClick={() => handleAddToCart(item)} style={{ color: "#1890ff" }} />,
              ]}
            >
              <span className="discount-badge">{item.discount}</span>
              <h4>{item.name || item.title}</h4>
              <p>
                <span className="price">${item.price}</span>
                <span className="old-price">${item.old}</span>
              </p>
              <p className="rating">⭐ {item.rating?.rate || item.rating || 0}</p>
            </Card>
          </Col>
        ))}
      </Row>
      <div>
        <Button className="view-all-btn">View All Products</Button>
      </div>
      <hr />
    </div>
  );
};

export default FlashSales;
