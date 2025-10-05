import { Row, Col, Card, Typography, Button, Tag, Rate } from "antd";
import { HeartOutlined, EyeOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import "../assets/style.css";

const { Title, Text } = Typography;

const products = [
  { 
    id: 1, 
    name: "Breed Dry Dog Food", 
    price: 100, 
    rating: 4, 
    img: "https://files.refurbed.com/ii/iphone-14-pro-1662623063.jpg",
    reviews: 35
  },
  { 
    id: 2, 
    name: "CANON EOS DSLR Camera", 
    price: 360, 
    rating: 4, 
    img: "https://files.refurbed.com/ii/iphone-14-pro-1662623063.jpg",
    reviews: 95
  },
  { 
    id: 3, 
    name: "ASUS FHD Gaming Laptop", 
    price: 700, 
    rating: 4, 
    img: "https://files.refurbed.com/ii/iphone-14-pro-1662623063.jpg",
    reviews: 325
  },
  { 
    id: 4, 
    name: "Curology Product Set", 
    price: 500, 
    rating: 4, 
    img: "https://files.refurbed.com/ii/iphone-14-pro-1662623063.jpg",
    reviews: 145
  },
  { 
    id: 5, 
    name: "Kids Electric Car", 
    price: 960, 
    rating: 4, 
    img: "https://files.refurbed.com/ii/iphone-14-pro-1662623063.jpg",
    reviews: 65
  },
  { 
    id: 6, 
    name: "Jr. Zoom Soccer Cleats", 
    price: 160, 
    rating: 4, 
    img: "https://files.refurbed.com/ii/iphone-14-pro-1662623063.jpg",
    reviews: 35
  },
  { 
    id: 7, 
    name: "GPII Shooter USB Gamepad", 
    price: 660, 
    rating: 4, 
    img: "https://files.refurbed.com/ii/iphone-14-pro-1662623063.jpg",
    reviews: 55
  },
  { 
    id: 8, 
    name: "Quilted Satin Jacket", 
    price: 660, 
    rating: 4, 
    img: "https://files.refurbed.com/ii/iphone-14-pro-1662623063.jpg",
    reviews: 55
  },
];

const ExplorProducts = () => {
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
              Expolre Our Products

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
              cover={<img alt={product.name} src={product.img} />}
              actions={[<HeartOutlined key="fav" />, <EyeOutlined key="view" />]}
            >
              <Text className="product-price">${product.price}</Text>
              <Rate disabled defaultValue={product.rating} className="product-rating" />
              <Text type="secondary"> ({product.reviews})</Text>
              <Text className="product-name">{product.name}</Text>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ExplorProducts;