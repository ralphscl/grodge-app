// Global Components
import Carousel from "../../components/carousel/Carousel";
// Homepage Components
import PolicyHighlights from "./components/PolicyHighlights";
import CategoryShowcase from "./components/CategoryShowcase";
import LatestPosts from "./components/LatestPosts";
import LatestProducts from "./components/LatestProducts";

const HomePage = () => {
  return (
    <>
      <Carousel delay={8000}/>
      <div className='px-8 md:px-4 lg:px-28 xl:px-60'>
        <PolicyHighlights />
        <CategoryShowcase />
        <LatestProducts />
      </div>
      <div className='bg-gray-50 py-4 px-8 md:px-4 lg:px-28 xl:px-60'>
        <LatestPosts />
      </div>
    </>
  );
}

export default HomePage;