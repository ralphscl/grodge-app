import PropTypes from 'prop-types';

const CategoryCard = ({ button, background, text, cardStyle, bgStyle }) => {
  return (
    <div className={`w-full mb-4 relative overflow-hidden group ${cardStyle}`}>
      <img
        className={`w-full object-cover group-hover:scale-150 transition duration-500 cursor-pointer ${bgStyle}`}
        src={background}
        alt={`${text} Background`}
      />
      
      {/* Overlay color */}
      <div className="absolute inset-0 bg-accent-primary opacity-30"></div>
      {button && (
        <button className='py-2 px-6 absolute text-black-custom text-base font-bold bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-100 hover:bg-slate-300'>
          {text}
        </button>
      )}
    </div>
  );
};

CategoryCard.propTypes = {
  button: PropTypes.bool,
  background: PropTypes.string,
  text: PropTypes.string,
  cardStyle: PropTypes.string,
  bgStyle: PropTypes.string,
}

export default CategoryCard;