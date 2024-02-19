// Global Components
import Carousel from "../../components/carousel/Carousel";
// Homepage Components
import PolicyHighlights from "./components/PolicyHighlights";
import CategoryShowcase from "./components/CategoryShowcase";
import LatestPosts from "./components/LatestPosts";
import LatestProducts from "./components/LatestProducts";

const HomePage = () => {
  // Common styling for the home page
  const homePageStyles = 'px-8 md:px-4 lg:px-28 xl:px-60';

  return (
    <>
      {/* Carousel Component */}
      <Carousel delay={8000} />

      {/* Main Content */}
      <div className={homePageStyles}>
        {/* Policy Highlights Component */}
        <PolicyHighlights dataObj={[0,1,2]} />
        
        {/* Category Showcase Component */}
        <CategoryShowcase />
        
        {/* Latest Products Component */}
        <LatestProducts />
      </div>

      {/* Latest Posts Component */}
      <div className={`bg-gray-50 mt-20 py-4 ${homePageStyles}`}>
        <LatestPosts dataObj={[0,1,2]} />
      </div>
    </>
  );
};

export default HomePage;