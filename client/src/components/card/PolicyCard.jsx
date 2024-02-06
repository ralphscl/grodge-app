import PropTypes from 'prop-types';
// Icon
import { ReactComponent as Account } from '../../assets/svg/user.svg';

const PolicyCard = () => {
  return (
    <div className="w-full p-8 mb-4 overflow-hidden opacity-75 bg-gray-100 flex md:flex-col xl:flex-row text-left md:text-center xl:text-left">
        <div className='flex justify-center pe-4 xl:pe-4 me-4 md:me-0 xl:me-4 border-black-custom border-r md:border-r-0 xl:border-r'>
            <Account className="h-16 w-16" />
        </div>
        <div className="ms-8 md:ms-0 lg:ms-2 xl:ms-8 flex flex-col justify-center">
            <h1 className="text-xl font-bold">FREE SHIPPING</h1>
            <h4 className="mt-2">On All Orders</h4>
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