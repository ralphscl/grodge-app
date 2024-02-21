import Sitemap from './components/Sitemap';
import Copyright from './components/Copyright';

const Footer = () => {
  const footerStyle = "px-8 md:px-4 lg:px-28 xl:px-58 2xl:px-64"

  return (
    <footer className='bg-footer-primary text-footer-secondary'>
      <Sitemap footerStyle={footerStyle} />
      <div className='border-white border-b border-solid border-opacity-20'></div>
      <Copyright footerStyle={footerStyle} />
    </footer>
  );
}

export default Footer;