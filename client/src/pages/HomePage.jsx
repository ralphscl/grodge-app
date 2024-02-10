import Carousel from "../components/carousel/Carousel";
import CategoryContainer from "../components/container/CategoryContainer";
import ThreeColumn from "../components/container/ThreeColumn";

import PolicyCard from "../components/card/PolicyCard";
import BlogCard from "../components/card/BlogCard";

const HomePage = () => {
  return (
    <>
      <Carousel delay={8000}/>
      <ThreeColumn component={<PolicyCard />} />
      <CategoryContainer />
      <ThreeColumn component={<BlogCard />} />
    </>
  );
}

export default HomePage;