import { Row, Col, Card, Typography, Button, Rate, Tag } from "antd";
import { HeartOutlined, EyeOutlined } from "@ant-design/icons";
import "../assets/style.css";

const { Title, Text } = Typography;

const products = [
  { id: 1, name: "The north coat", price: 260, oldPrice: 360, rating: 4,     img: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-deep-purple-220907_inline.jpg.large.jpg"
 },
  { id: 2, name: "Gucci duffle bag", price: 960, oldPrice: 1160, rating: 4,     img: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-deep-purple-220907_inline.jpg.large.jpg"
 },
  { id: 3, name: "RGB liquid CPU Cooler", price: 160, oldPrice: 170, rating: 4,     img: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-deep-purple-220907_inline.jpg.large.jpg"
 },
  { id: 4, name: "Small BookShelf", price: 360, rating: 4,     img: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-deep-purple-220907_inline.jpg.large.jpg"
 },
];

const ExplorProducts = () => {
  return (
    <div className="products-section">
      {/* Header */}
      <div className="products-header-row">
        <Col>
          <Tag color="red">This Month</Tag>
          <Title level={2} className="products-title">Best Selling Products</Title>
        </Col>
        <Col>
          <Button type="primary" danger>View All</Button>
        </Col>
      </div>

      {/* Products Grid */}
      <Row gutter={[16, 16]}>
        {products.map((product) => (
          <Col xs={24} sm={12} md={12} lg={6} key={product.id}>
            <Card
              hoverable
              className="product-card"
              cover={<img alt={product.name} src={product.img} />}
              actions={[<HeartOutlined key="fav" />, <EyeOutlined key="view" />]}
            >
              <Text className="product-price">${product.price}</Text>
              {product.oldPrice && (
                <Text className="product-old-price" delete>${product.oldPrice}</Text>
              )}
              <Rate disabled defaultValue={product.rating} className="product-rating" />
              <Text type="secondary"> (65)</Text>
              <Text className="product-name">{product.name}</Text>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ExplorProducts;
