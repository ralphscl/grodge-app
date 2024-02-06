import Carousel from "../components/carousel/Carousel";
import CategoryContainer from "../components/container/CategoryContainer";

const HomePage = () => {
  return (
    <>
      <Carousel delay={8000}/>
      <CategoryContainer />
    </>
  );
}

export default HomePage;