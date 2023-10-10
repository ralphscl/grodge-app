import PropTypes from 'prop-types';

const Card = ({ cardHeight, button, background, backgroundHeight, text }) => {
  return (
    <div className={`w-full mb-4 relative overflow-hidden group ${cardHeight}`}>
      <img
        className={`w-full object-cover group-hover:scale-110 transition duration-500 cursor-pointer ${backgroundHeight}`}
        src={background}
        alt='Fashion Background'
      />
      {button && (
        <button className='py-2 px-6 absolute text-black-custom text-base font-bold bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-100 hover:bg-slate-300'>
          {text}
        </button>
      )}
    </div>
  );
};

Card.propTypes = {
  cardHeight: PropTypes.string,
  button: PropTypes.bool,
  background: PropTypes.string,
  backgroundHeight: PropTypes.string,
  text: PropTypes.string,
  height: PropTypes.string,
}

export default Card;