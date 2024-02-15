import PropTypes from 'prop-types';
// Asset
import DefaultImage from '../../assets/png/grodge-sale-placeholder-800x600.png'

const ProductCard = ({ size }) => {


  return (
    <div className={`w-full mb-4 overflow-hidden opacity-75 roundedtext-left cursor-pointer flex gap-6 ${size === 'sm' ? ' flex-row' : ' flex-col'}`}>
      <div>
        <img src={DefaultImage} className={size === 'sm' ? 'w-40' : 'w-full'}/>
      </div>
      <div className='bg-white'>
        <h1 className='font-bold text-black-custom text-md'>Lorem Impsum dolor sit amet.</h1>
        <p> Php 200.00 </p>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
    
}

export default ProductCard;