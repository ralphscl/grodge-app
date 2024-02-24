import { Link } from 'react-router-dom';
import BannerBackground from '../../assets/png/banner-background.png';

const Banner = ({ page, prevPage }) => {

  return (
    <section>
      {/* Banner */}
      <div style={{ backgroundImage: `url(${BannerBackground})`, backgroundSize: 'cover' }} className='h-80 text-center flex flex-col justify-center'>
        <h1 className='text-black text-3xl font-bold py-2'> {page} </h1>
        <p className='text-black text-md font-semibold'> 
            {prevPage.map((link, index) => (
              <>
                <Link key={index} to={link.to} className='hover:text-white transition-colors duration-300'>{link.page}</Link> &gt;
              </>
            ))}
          <span className='text-black'> {page.split(' ')[0]} </span> 
        </p>
      </div>
    </section>
  );

};

export default Banner