import PropTypes from 'prop-types';

const Card = ({ background, text }) => {
  return (
    <div className='w-full h-64 md:h-64 lg:h-80 mb-4 relative overflow-hidden'>
      <img
        className='w-full h-64 md:h-full lg:h-[22rem] object-cover hover:scale-110 transition duration-500 cursor-pointer'
        src={background}
        alt='Fashion Background'
      />
      <button className='py-1 px-2 absolute text-black-custom text-base font-bold bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-100'>
        {text}
      </button>
    </div>
  );
};

Card.propTypes = {
  background: PropTypes.string,
  text: PropTypes.string,
  height: PropTypes.string,
}

export default Card;