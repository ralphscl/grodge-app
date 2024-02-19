import BlogCard from "../../../components/card/BlogCard";
import ThreeColumn from "../../../components/container/ThreeColumn";

const LatestPosts = ({ dataObj }) => {
  return (
    <>
      <ThreeColumn component={<BlogCard />} dataObj={dataObj}/>
    </>
  );
}

export default LatestPosts;