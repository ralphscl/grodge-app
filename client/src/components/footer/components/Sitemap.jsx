import { Link } from 'react-router-dom';
// Components
import ContactInfo from '../../contactInfo/ContactInfo';
// Assets
import grodgeLogoWhite from '../../../assets/png/grodge-text-white-transparent.png';

const Sitemap = ({ footerStyle }) => {

  return (
    <div className={`h-auto py-9 px-20 md:px-10 flex flex-col md:flex-row gap-6 justify-center ${footerStyle}`}>
      <div className='w-full md:w-5/12 flex flex-col gap-4'>
        <Link key={'logo'} to='/'>
          <img src={grodgeLogoWhite} alt="grodge-sale-logo" width={150} />
        </Link>

        <ContactInfo fontStyle='text-white' />
      </div>

      <div className='w-full md:w-7/12 flex flex-row gap-4'>
        <div className='w-1/2 text-center md:text-left'>
          <h1 className='text-white pb-6 text-xl font-bold'>Information</h1>
          <p className='text-white py-2 text-md cursor-pointer'>Products</p>
          <p className='text-white py-2 text-md cursor-pointer'>Blog</p>
          <p className='text-white py-2 text-md cursor-pointer'>About</p>
          <p className='text-white py-2 text-md cursor-pointer'>Contact</p>
          <p className='text-white py-2 text-md cursor-pointer'>Policies</p>
          <p className='text-white py-2 text-md cursor-pointer'>Terms of Use</p>
        </div>

        <div className='w-1/2 text-center md:text-left'>
          <h1 className='text-white pb-6 text-xl font-bold'>My Account</h1>
          <p className='text-white py-2 text-md cursor-pointer'>Login/Register</p>
          <p className='text-white py-2 text-md cursor-pointer'>Account</p>
          <p className='text-white py-2 text-md cursor-pointer'>Basket</p>
          <p className='text-white py-2 text-md cursor-pointer'>Wishlist</p>
        </div>
      </div>
    </div>
  );
}
  
export default Sitemap;
