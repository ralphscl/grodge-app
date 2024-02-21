// Social Icons
import { ReactComponent as Facebook } from '../../../assets/svg/social-facebook.svg';
import { ReactComponent as Instagram } from '../../../assets/svg/social-instagram.svg';
import { ReactComponent as Twitter } from '../../../assets/svg/social-twitter.svg';
import { ReactComponent as LinkedIn } from '../../../assets/svg/social-linkedin.svg';
import { ReactComponent as Pinterest } from '../../../assets/svg/social-pinterest.svg';
import { ReactComponent as Youtube } from '../../../assets/svg/social-youtube.svg';
// Payment Option Logos
import Amex from '../../../assets/png/payment-option-amex.png';
import Visa from '../../../assets/png/payment-option-visa.png';
import Mc from '../../../assets/png/payment-option-mastercard.png';

const Copyright = ({ footerStyle }) => {
    return (
      <div className={`h-20 py-9 flex flex-col md:flex-row gap-6 ${footerStyle}`}>
        <div className='w-6/12'>
          &#169; No Copyright claims. Developed by Ralph for Personal only.
        </div>
        <div className='w-3/12 flex flex-row justify-center items-center gap-2 '>
          <Facebook />
          <Instagram />
          <Twitter />
          <LinkedIn />
          <Pinterest />
          <Youtube />
        </div>
        <div className='w-3/12 flex flex-row justify-center items-center gap-2'>
          <img src={Amex} alt='mc-logo' className='h-[30px] w-[60px] grayscale hover:grayscale-0' />
          <img src={Visa} alt='visa-logo' className='h-[30px] w-[60px] grayscale hover:grayscale-0'  />
          <img src={Mc} alt='amex-logo' className='h-[30px] w-[60px] grayscale hover:grayscale-0' />
        </div>
      </div>
    );
  }
  
  export default Copyright;