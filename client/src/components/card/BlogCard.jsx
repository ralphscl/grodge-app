import PropTypes from 'prop-types';

const BlogCard = () => {
  return (
    <div className="w-full p-8 lg:px-4 xl:px-8 mb-4 overflow-hidden opacity-75 rounded flex md:flex-col text-left md:text-center xl:text-left cursor-pointer">
      <div>
        image
      </div>
      <div>
        desc
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  button: PropTypes.bool,
  background: PropTypes.string,
  text: PropTypes.string,
  cardHeight: PropTypes.string,
  backgroundHeight: PropTypes.string,
}

export default BlogCard;