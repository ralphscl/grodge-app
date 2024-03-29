// Global Components
import Carousel from "../../components/carousel/Carousel";
// Homepage Components
import PolicyHighlights from "./components/PolicyHighlights";
import CategoryShowcase from "./components/CategoryShowcase";
import LatestPosts from "./components/LatestPosts";
import LatestProducts from "./components/LatestProducts";
import Subscription from "./components/Subscription";

const HomePage = () => {
  // Common styling for the home page
  const homePageStyles = 'px-8 md:px-4 lg:px-28 xl:px-58 2xl:px-64';

  return (
    <>
      {/* Carousel Component */}
      <Carousel delay={8000} />

      {/* Main Content */}
      <div className={homePageStyles}>
        {/* Policy Highlights Component */}
        <PolicyHighlights />
        
        {/* Category Showcase Component */}
        <CategoryShowcase />
        
        {/* Latest Products Component */}
        <LatestProducts />
      </div>

      <Subscription />

      {/* Latest Posts Component */}
      <div className={`bg-gray-50 py-4 ${homePageStyles}`}>
        <LatestPosts dataObj={[0,1,2]} />
      </div>
    </>
  );
};

export default HomePage;