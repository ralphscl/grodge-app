import Carousel from "../../components/carousel/Carousel";
import CategoryContainer from "./CategoryContainer";
import PolicyContainer from "./PolicyContainer";
import ThreeColumn from "../../components/container/ThreeColumn";

import PolicyCard from "../../components/card/PolicyCard";
import BlogCard from "../../components/card/BlogCard";

const HomePage = () => {
  return (
    <>
      <Carousel delay={8000}/>
      <PolicyContainer />
      <CategoryContainer />
      <ThreeColumn component={<BlogCard />} array={[0,1,2]} />
    </>
  );
}

export default HomePage;