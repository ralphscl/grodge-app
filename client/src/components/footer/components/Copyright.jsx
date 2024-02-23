import { ReactComponent as Facebook } from '../../../assets/svg/social-facebook.svg';
import { ReactComponent as Instagram } from '../../../assets/svg/social-instagram.svg';
import { ReactComponent as Twitter } from '../../../assets/svg/social-twitter.svg';
import { ReactComponent as LinkedIn } from '../../../assets/svg/social-linkedin.svg';
import { ReactComponent as Pinterest } from '../../../assets/svg/social-pinterest.svg';
import { ReactComponent as Youtube } from '../../../assets/svg/social-youtube.svg';
import Amex from '../../../assets/png/payment-option-amex.png';
import Visa from '../../../assets/png/payment-option-visa.png';
import Mc from '../../../assets/png/payment-option-mastercard.png';


const Copyright = ({ footerStyle }) => {
  const socialIcons = [
    { icon: Facebook, alt: 'facebook-icon' },
    { icon: Instagram, alt: 'instagram-icon' },
    { icon: Twitter, alt: 'twitter-icon' },
    { icon: LinkedIn, alt: 'linkedin-icon' },
    { icon: Pinterest, alt: 'pinterest-icon' },
    { icon: Youtube, alt: 'youtube-icon' },
  ];
  
  const paymentOptionLogos = [
    { logo: Amex, alt: 'amex-logo' },
    { logo: Visa, alt: 'visa-logo' },
    { logo: Mc, alt: 'mc-logo' },
  ];
  
  return (
    <div className={`h-auto py-9 flex flex-col md:flex-row gap-6 ${footerStyle}`}>
      <div className='w-full text-center'>
        &#169; No Copyright claims. Developed by Ralph for Personal only.
      </div>
      
      <div className='w-full flex flex-row justify-center items-center gap-6 '>
        {socialIcons.map((social, index) => (
          <social.icon key={index} width="24px" height="24px" alt={social.alt} />
        ))}
      </div>

      <div className='w-full flex flex-row justify-center items-center gap-2'>
        {paymentOptionLogos.map((payment, index) => (
          <img key={index} src={payment.logo} alt={payment.alt} className='h-[30px] w-[60px] grayscale hover:grayscale-0' />
        ))}
      </div>
    </div>
  );
}
  
export default Copyright;