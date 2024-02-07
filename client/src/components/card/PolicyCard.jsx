import PropTypes from 'prop-types';
// Icon
import { ReactComponent as Account } from '../../assets/svg/user.svg';

const PolicyCard = () => {
  return (
    <div className="w-full p-8 lg:px-4 xl:px-8 mb-4 overflow-hidden opacity-75 bg-gray-50 rounded flex md:flex-col xl:flex-row text-left md:text-center xl:text-left cursor-pointer hover:bg-white hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
      <div className='flex justify-center pe-4 md:pe-0 xl:pe-4 me-4 md:me-0 xl:me-4 border-black-custom border-r md:border-r-0 xl:border-r'>
          <Account className="h-16 w-16" />
      </div>
      <div className="ms-2 md:ms-0 xl:ms-2 flex flex-col justify-center">
          <h1 className="text-xl font-bold whitespace-nowrap">FREE SHIPPING</h1>
          <h4 className="mt-2 whitespace-nowrap">On All Orders</h4>
      </div>
    </div>
  );
};

PolicyCard.propTypes = {
  button: PropTypes.bool,
  background: PropTypes.string,
  text: PropTypes.string,
  cardHeight: PropTypes.string,
  backgroundHeight: PropTypes.string,
}

export default PolicyCard;