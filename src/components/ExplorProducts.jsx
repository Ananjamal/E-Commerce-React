import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Card, Typography, Button, Rate, message, Pagination } from "antd";
import {
  HeartOutlined,
  EyeOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import "../assets/style.css";
import { fetchProductsRequest } from "../redux/products/productActions";
import {
  addItemToCartRequest,
  fetchCartItemsRequest,
} from "../redux/cart/cartActions";

const { Title, Text } = Typography;

const ExploreProducts = () => {
  const [msg, ctx] = message.useMessage();
  const dispatch = useDispatch();

  const { products = [], loading, error } = useSelector((s) => s.products);
  const { items: cart = {} } = useSelector((s) => s.cart);

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;

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
      msg.info(`${product.title} quantity updated in cart!`);
    } else {
      updated = [...current, { productId: product.id, quantity: 1 }];
      msg.success(`${product.title} added to cart!`);
    }

    const payload = {
      userId: 1,
      date: new Date().toISOString().split("T")[0],
      products: updated,
    };

    dispatch(addItemToCartRequest(payload));
  };

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

  if (!loading && products.length === 0)
    return (
      <div className="products-section center" style={{ padding: "40px" }}>
        <Text>No products available</Text>
      </div>
    );

  const startIndex = (currentPage - 1) * pageSize;
  const currentProducts = products.slice(startIndex, startIndex + pageSize);

  return (
    <div className="products-section">
      {ctx}
      <div className="products-header-row">
        <Col>
          <div className="flashsales-top">
            <div className="red-block" />
            <Title level={5} className="todays-text">
              Our Products
            </Title>
          </div>
          <Title level={2} className="flashsales-title">
            Explore Our Products
          </Title>
        </Col>
        <Col>
          <Button type="primary" danger>
            View All
          </Button>
        </Col>
      </div>

      <Row gutter={[16, 16]}>
        {currentProducts.map((p) => (
          <Col xs={24} sm={12} md={12} lg={6} key={p.id}>
            <Card
              hoverable
              className="product-card"
              cover={<img alt={p.title} src={p.image} />}
              actions={[
                <HeartOutlined key="fav" />,
                <EyeOutlined key="view" />,
                <ShoppingCartOutlined
                  key="cart"
                  onClick={() => handleAddToCart(p)}
                  style={{ color: "#1890ff" }}
                />,
              ]}
            >
              <Text className="product-price">${p.price}</Text>
              <Rate
                disabled
                defaultValue={Math.round(p.rating?.rate || 0)}
                className="product-rating"
              />
              <Text type="secondary"> ({p.rating?.count || 0})</Text>
              <Text className="product-name">{p.title}</Text>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Centered Pagination */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 32,
        }}
      >
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={products.length}
          onChange={(page) => setCurrentPage(page)}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};

export default ExploreProducts;
