import PropTypes from 'prop-types';
// Assets
import DefaultImage from '../../assets/png/grodge-sale-placeholder-800x600.png';

const ProductCard = ({ size }) => {
  const isSmall = size === 'sm';
  const imageSizeClass = isSmall ? 'w-40' : 'w-full';

  return (
    <div className={`w-full mb-4 overflow-hidden opacity-75 rounded text-left cursor-pointer flex ${isSmall ? 'flex-row' : 'flex-col'} gap-6`}>
      <div>
        <img src={DefaultImage} className={imageSizeClass} alt='Product' />
      </div>
      <div className='bg-white'>
        <h1 className={`font-bold text-black-custom ${isSmall ? ' text-xs py-2' : ' text-md' }`}>Lorem Ipsum dolor sit amet.</h1>
        {isSmall && <h2 className={`${isSmall ? ' text-xs' : ' text-md'} `}>Lorem Ipsum Dolor</h2>}
        <p className={`font-bold ${isSmall ? ' text-xs' : ' text-md'} `}>
          <span className='me-2 text-gray-400 line-through'>Php 200.00</span>
          <span className='text-black-custom'>Php 200.00</span>
        </p>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

ProductCard.defaultProps = {
  size: 'md',
};

export default ProductCard;