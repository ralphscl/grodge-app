// Homepage Components
import PolicyContainer from "./components/PolicyHighlights";
import CategoryShowcase from "./components/CategoryShowcase";
import LatestPostContainer from "./components/LatestPostContainer";

// Global Components
import Carousel from "../../components/carousel/Carousel";

const HomePage = () => {
  return (
    <>
      <Carousel delay={8000}/>
      <div className='px-8 md:px-4 lg:px-28 xl:px-60'>
        <PolicyContainer />
        <CategoryShowcase />
      </div>
      <div className='bg-gray-50 py-4 px-8 md:px-4 lg:px-28 xl:px-60'>
        <LatestPostContainer />
      </div>
    </>
  );
}

export default HomePage;