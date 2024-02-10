import PropTypes from 'prop-types';

const BlogCard = ({ button, background, text, cardHeight, backgroundHeight }) => {
  return (
    <div className={`w-full mb-4 relative overflow-hidden group ${cardHeight}`}>
      div
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