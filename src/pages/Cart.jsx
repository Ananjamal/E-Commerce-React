import React, { useEffect, useState } from "react";
import { Row, Col, Typography, Button, Input, Space, Table, message, Spin } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../assets/style.css";
import TopBanner from "../components/TopBanner";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCartItemsRequest,
  removeItemFromCartRequest
} from "../redux/cart/cartActions";
import { fetchProductsRequest } from "../redux/products/productActions";

const { Title, Text } = Typography;

const Cart = () => {
  const dispatch = useDispatch();
  const { items: cartData, error, loading } = useSelector((state) => state.cart);
  const { products } = useSelector((state) => state.products);
  const navigate = useNavigate();
  const [couponCode, setCouponCode] = useState("");
  const [localCartItems, setLocalCartItems] = useState([]);

  useEffect(() => {
    dispatch(fetchCartItemsRequest());
    dispatch(fetchProductsRequest());
  }, [dispatch]);

  useEffect(() => {
    if (cartData && cartData.products && products.length > 0) {
      const enhancedCartItems = cartData.products.map(cartProduct => {
        const product = products.find(p => p.id === cartProduct.productId);
        return {
          key: cartProduct.productId,
          id: cartProduct.productId,
          productId: cartProduct.productId,
          quantity: cartProduct.quantity,
          price: product ? product.price : 0,
          name: product ? product.title : 'Product',
          image: product ? product.image : 'https://via.placeholder.com/100',
          category: product ? product.category : ''
        };
      }).filter(item => item.price > 0); 

      setLocalCartItems(enhancedCartItems);
    } else {
      setLocalCartItems([]);
    }
  }, [cartData, products]);

  const calculateSubtotal = (price, quantity) => {
    return price * quantity;
  };

  const subtotal = localCartItems.reduce(
    (sum, item) => sum + calculateSubtotal(item.price, item.quantity),
    0
  );

  const shipping = 0;
  const total = subtotal + shipping;

  const handleRemoveItem = (productId) => {
    dispatch(removeItemFromCartRequest(productId));
    message.success('Item removed from cart');
  };

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    
    setLocalCartItems(prevItems => 
      prevItems.map(item =>
        item.productId === productId
          ? { ...item, quantity: Number(newQuantity) }
          : item
      )
    );
  };

  const handleApplyCoupon = () => {
    console.log("Applying coupon:", couponCode);
    message.info('Coupon functionality would be implemented here');
  };

  const handleReturnToShop = () => {
    navigate('/products');
  };

  const handleUpdateCart = () => {
    // Here you would typically dispatch an action to update quantities on server
    message.success('Cart updated successfully');
    console.log('Updated cart items:', localCartItems);
  };

  const handleCheckout = () => {
    // Update cart with current quantities before checkout
    console.log('Proceeding to checkout with:', localCartItems);
    navigate("/checkout", { state: { cartItems: localCartItems } });
  };

  const columns = [
    {
      title: "Product",
      dataIndex: "product",
      key: "product",
      width: "40%",
      render: (_, record) => (
        <Space size="middle" align="center" className="product-cell-content">
          <CloseCircleOutlined
            className="cart-delete-icon"
            onClick={() => handleRemoveItem(record.productId)}
          />
          <img
            src={record.image}
            alt={record.name}
            className="cart-product-img"
          />
          <div>
            <Text className="cart-product-name">{record.name}</Text>
            {record.category && (
              <div>
                <Text type="secondary" className="cart-product-category">
                  {record.category}
                </Text>
              </div>
            )}
          </div>
        </Space>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      align: "center",
      width: "20%",
      render: (price) => (
        <Text className="price-text">${Number(price).toFixed(2)}</Text>
      ),
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      align: "center",
      width: "20%",
      render: (quantity, record) => (
        <Input
          type="number"
          value={quantity}
          min={1}
          onChange={(e) =>
            handleQuantityChange(record.productId, parseInt(e.target.value) || 1)
          }
          className="quantity-input"
        />
      ),
    },
    {
      title: "Subtotal",
      dataIndex: "subtotal",
      key: "subtotal",
      align: "center",
      width: "20%",
      render: (_, record) => (
        <Text className="subtotal-text">
          ${calculateSubtotal(record.price, record.quantity).toFixed(2)}
        </Text>
      ),
    },
  ];

  if (loading) {
    return (
      <>
        <TopBanner />
        <Navbar />
        <div className="cart-page-wrapper">
          <div className="loading-container">
            <Spin size="large" />
            <Text>Loading cart...</Text>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <TopBanner />
      <Navbar />
      <div className="cart-page-wrapper">
        <div className="cart-content-container">
          {/* Breadcrumb */}
          <Text className="cart-breadcrumb">
            Home / <span className="current-page">Cart</span>
          </Text>

          {/* Cart Table */}
          <div className="cart-table-wrapper">
            <Table
              columns={columns}
              dataSource={localCartItems}
              pagination={false}
              className="custom-cart-table"
              locale={{ 
                emptyText: products.length === 0 ? "Loading products..." : "Your cart is empty" 
              }}
            />
          </div>

          {/* Cart Actions */}
          <Row justify="space-between" className="cart-actions-row">
            <Button 
              className="return-shop-btn"
              onClick={handleReturnToShop}
            >
              Return To Shop
            </Button>
            <Button 
              className="update-cart-btn"
              onClick={handleUpdateCart}
              disabled={localCartItems.length === 0}
            >
              Update Cart
            </Button>
          </Row>

          {/* Coupon Code and Cart Total Section */}
          <Row gutter={[24, 24]} className="cart-summary-row">
            {/* Coupon Section */}
            <Col xs={24} md={12} className="coupon-section">
              <Space size="middle" align="start" className="coupon-space">
                <Input
                  placeholder="Coupon Code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="coupon-input"
                />
                <Button
                  className="apply-coupon-btn"
                  onClick={handleApplyCoupon}
                  disabled={localCartItems.length === 0}
                >
                  Apply Coupon
                </Button>
              </Space>
            </Col>

            {/* Cart Total Card */}
            <Col xs={24} md={12} className="cart-total-section">
              <div className="cart-total-card">
                <div className="cart-total-header">
                  <Title level={4} className="cart-total-title">
                    Cart Total
                  </Title>
                </div>
                <div className="cart-total-content">
                  <div className="total-line">
                    <Text className="total-label">Subtotal:</Text>
                    <Text className="total-value">${subtotal.toFixed(2)}</Text>
                  </div>
                  <div className="total-line shipping-line">
                    <Text className="total-label">Shipping:</Text>
                    <Text className="total-value">Free</Text>
                  </div>
                  <div className="total-line final-total">
                    <Text className="total-label">Total:</Text>
                    <Text className="total-value">${total.toFixed(2)}</Text>
                  </div>
                  <Button
                    onClick={handleCheckout}
                    className="checkout-btn"
                    disabled={localCartItems.length === 0}
                  >
                    Process to checkout
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;