import Carousel from "../components/carousel/Carousel";
import CategoryContainer from "../components/container/CategoryContainer";
import PolicyContainer from "../components/container/PolicyContainer";

const HomePage = () => {
  return (
    <>
      <Carousel delay={8000}/>
      <PolicyContainer />
      <CategoryContainer />
    </>
  );
}

export default HomePage;