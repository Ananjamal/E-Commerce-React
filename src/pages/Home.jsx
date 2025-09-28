import BestSellers from "../components/BestSellers";
import Categories from "../components/Categories";
import ExploreProducts from "../components/ExploreProducts";
import FlashSales from "../components/FlashSales";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import Navbar from "../components/Navbar";
import NewArrival from "../components/NewArrival";


function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <HeroBanner />
      <FlashSales />
      <Categories />
      <BestSellers />
      <ExploreProducts />
      <NewArrival />
      <Footer />
    </>
  );
}

export default Home;
