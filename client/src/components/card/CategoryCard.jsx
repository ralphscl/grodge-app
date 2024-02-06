import PropTypes from 'prop-types';

const CategoryCard = ({ text, button, background, cardHeight, backgroundHeight }) => {
  return (
    <div className={`w-full mb-4 relative overflow-hidden group ${cardHeight}`}>
      <img
        className={`w-full object-cover group-hover:scale-150 transition duration-500 cursor-pointer ${backgroundHeight}`}
        src={background}
        alt={`${text} Background`}
      />
      {button && (
        <button className='py-2 px-6 absolute text-black-custom text-base font-bold bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-100 hover:bg-slate-300'>
          {text}
        </button>
      )}
    </div>
  );
};

CategoryCard.propTypes = {
  text: PropTypes.string,
  button: PropTypes.bool,
  background: PropTypes.string,
  cardHeight: PropTypes.string,
  backgroundHeight: PropTypes.string,
}

export default CategoryCard;