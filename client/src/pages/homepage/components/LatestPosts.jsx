import BlogCard from "../../../components/card/BlogCard";
import ThreeColumn from "../../../components/container/ThreeColumn";

const LatestPosts = () => {
  return (
    <>
      <h1 className='text-black-custom text-2xl font-bold'>Latest Posts</h1>
      <ThreeColumn component={<BlogCard />} array={[0,1,2]}/>
    </>
  );
}

export default LatestPosts;