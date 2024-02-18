// Global Components
import Carousel from "../../components/carousel/Carousel";
// Homepage Components
import PolicyHighlights from "./components/PolicyHighlights";
import CategoryShowcase from "./components/CategoryShowcase";
import LatestPosts from "./components/LatestPosts";
import LatestProducts from "./components/LatestProducts";

const HomePage = () => {
  const homePageStyle = ' px-8 md:px-4 lg:px-28 xl:px-60'

  return (
    <>
      <Carousel delay={8000}/>
      <div className={homePageStyle}>
        <PolicyHighlights />
        <CategoryShowcase />
        <LatestProducts />
      </div>
      <div className={`bg-gray-50 py-4 ${homePageStyle}`}>
        <LatestPosts />
      </div>
    </>
  );
}

export default HomePage;