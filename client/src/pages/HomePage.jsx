import Carousel from "../components/carousel/Carousel";
import CategoryPreview from "../components/preview/CategoryPreview";

const HomePage = () => {
  return (
    <>
      <Carousel delay={8000}/>
      <CategoryPreview />
    </>
  );
}

export default HomePage;