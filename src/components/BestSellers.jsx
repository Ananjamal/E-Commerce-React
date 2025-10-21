import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Card, Typography, Button, Rate, message } from "antd";
import { HeartOutlined, EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import "../assets/style.css";

import { fetchProductsRequest } from "../redux/products/productActions";
import { addItemToCartRequest, fetchCartItemsRequest } from "../redux/cart/cartActions";

const { Title, Text } = Typography;

const BestSellers = () => {
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
        p.productId === product.id ? { ...p, quantity: p.quantity + 1 } : p
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

  const processedProducts = products
    .map((p) => ({
      ...p,
      oldPrice: p.oldPrice || Math.round(p.price * 1.2),
    }))
    .slice(0, 4);

  if (loading)
    return (
      <div className="products-section center">
        <div>Loading products...</div>
      </div>
    );

  if (error)
    return (
      <div className="products-section center" style={{ color: "#ff4d4f" }}>
        <div>Error loading products: {error}</div>
        <Button type="primary" onClick={() => dispatch(fetchProductsRequest())}>
          Retry
        </Button>
      </div>
    );

  return (
    <div className="products-section">
      {ctx}
      <div className="products-header-row">
        <Col>
          <div className="flashsales-top">
            <div className="red-block" />
            <Title level={5} className="todays-text">
              Best Sellers
            </Title>
          </div>
          <Title level={2} className="flashsales-title">
            Best Selling Products
          </Title>
        </Col>
        <Col>
          <Button type="primary" danger>
            View All
          </Button>
        </Col>
      </div>

      <Row gutter={[16, 16]}>
        {processedProducts.map((product) => (
          <Col xs={24} sm={12} md={12} lg={6} key={product.id}>
            <Card
              hoverable
              className="product-card"
              cover={<img alt={product.name || product.title} src={product.img || product.image} />}
              actions={[
                <HeartOutlined key="fav" />,
                <EyeOutlined key="view" />,
                <ShoppingCartOutlined
                  key="cart"
                  onClick={() => handleAddToCart(product)}
                  style={{ color: "#1890ff" }}
                />,
              ]}
            >
              <Text className="product-price">${product.price}</Text>
              {product.oldPrice && (
                <Text className="product-old-price" delete>
                  ${product.oldPrice}
                </Text>
              )}
              <Rate
                disabled
                defaultValue={product.rating || product.rating?.rate || 0}
                className="product-rating"
              />
              <Text type="secondary"> (65)</Text>
              <Text className="product-name">{product.name || product.title}</Text>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default BestSellers;
