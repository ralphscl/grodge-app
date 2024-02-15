import PropTypes from 'prop-types';
// Asset
import DefaultImage from '../../assets/png/grodge-sale-placeholder-800x600.png'

const BlogCard = () => {
  return (
    <div className="w-full mb-4 overflow-hidden opacity-75 rounded flex flex-col text-left cursor-pointer">
      <div>
        <img src={DefaultImage} />
      </div>
      <div className='bg-white p-10'>
        <p className='mb-2'>January 20, 2024</p>
        <h1 className='font-bold text-black-custom text-xl'>Lorem Impsum dolor sit amet.</h1>
        <p>
          <span>Posted by: </span>
          <span className='text-black-custom hover:underline'>John Doe</span>
        </p>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  
}

export default BlogCard;