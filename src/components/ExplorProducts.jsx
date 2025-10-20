import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Card, Typography, Button, Rate, message } from "antd";
import { HeartOutlined, EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import "../assets/style.css";
import { fetchProductsRequest } from "../redux/products/productActions";
import { addItemToCartRequest, fetchCartItemsRequest } from "../redux/cart/cartActions";

const { Title, Text } = Typography;

const ExploreProducts = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(state => state.products);
  const { items: cartData, loading: cartLoading } = useSelector(state => state.cart);

  useEffect(() => {
    dispatch(fetchProductsRequest());
    dispatch(fetchCartItemsRequest());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    // Get current cart products or empty array
    const currentProducts = cartData?.products || [];
    
    // Check if product is already in cart
    const existingProductIndex = currentProducts.findIndex(item => item.productId === product.id);
    
    let updatedProducts;
    
    if (existingProductIndex > -1) {
      // Update quantity if product exists
      updatedProducts = currentProducts.map((item, index) => 
        index === existingProductIndex 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      message.info(`${product.title} quantity updated in cart!`);
    } else {
      // Add new product
      updatedProducts = [
        ...currentProducts,
        {
          productId: product.id,
          quantity: 1
        }
      ];
      message.success(`${product.title} added to cart!`);
    }

    // Prepare cart data for API
    const cartPayload = {
      userId: 1,
      date: new Date().toISOString().split('T')[0],
      products: updatedProducts
    };

    console.log("Sending cart data:", cartPayload);
    dispatch(addItemToCartRequest(cartPayload));
    
    // Refresh cart data after adding item
    setTimeout(() => {
      dispatch(fetchCartItemsRequest());
    }, 500);
  };

  // Show loading state
  if (loading) {
    return (
      <div className="products-section">
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <div>Loading products...</div>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="products-section">
        <div style={{ textAlign: 'center', padding: '40px', color: '#ff4d4f' }}>
          <div>Error loading products: {error}</div>
          <Button type="primary" onClick={() => dispatch(fetchProductsRequest())}>
            Retry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="products-section">
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
        {products.map((product) => (
          <Col xs={24} sm={12} md={12} lg={6} key={product.id}>
            <Card
              hoverable
              className="product-card"
              cover={<img alt={product.title} src={product.image} />}
              actions={[
                <HeartOutlined key="fav" />, 
                <EyeOutlined key="view" />,
                <ShoppingCartOutlined 
                  key="cart" 
                  onClick={() => handleAddToCart(product)}
                  style={{ color: '#1890ff' }}
                />
              ]}
            >
              <Text className="product-price">${product.price}</Text>
              <Rate disabled defaultValue={Math.round(product.rating?.rate || 0)} className="product-rating" />
              <Text type="secondary"> ({product.rating?.count || 0})</Text>
              <Text className="product-name">{product.title}</Text>
            </Card>
          </Col>
        ))}
      </Row>

      {products.length === 0 && !loading && (
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <Text>No products available</Text>
        </div>
      )}
    </div>
  );
};

export default ExploreProducts;