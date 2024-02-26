import Banner from '../../components/banner/Banner';
// Assets
import AboutImage from '../../assets/jpeg/pexels-photomix-company-230544.jpg';

const AboutPage = () => {

  return (
    <section>
      <Banner page='About Us!' prevPage={[{page: 'Home', to: '/' }]} />
      
      <div className='flex flex-col lg:flex-row px-8 py-16 md:px-4 lg:px-28 xl:px-58 2xl:px-64'>
        <div className='w-full lg:w-1/2 p-12'>
          <h1 className='pb-6 text-black font-bold text-4xl'>Who we are</h1>
          <p>
            Dorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Ut blandit nisi a dictum tristique. Nullam urna metus, 
            vestibulum ac sodales eSed ut perspiciatis unde omnis iste 
            natus error sit voluptatem accusantium doloremque laudantium 
            totam remrutrumDorem ipsum dolor sit amet, consectetur 
            adipiscing elit. Sed ut perspiciatis.Dorem ipsum dolor sit 
            amet, consectetur adipiscing elit. Ut blandit nisi a dictum 
            tristique. <br /><br />
            Dorem ipsum dolor sit amet, consectetur adipiscing elit. Ut 
            blandit nisi a dictum tristique. Nullam urna metus, vestibulum 
            ac sodales eSed ut perspiciatis unde omnis iste natus error sit 
            voluptatem accusantium doloremque laudantium totam remrutrumDorem 
            ipsum dolor sit amet, consectetur adipiscing elit. Sed ut 
            perspiciatis. Doremque laudantium totam remrutrumDorem ipsum dolor.
          </p>
        </div>
        <img src={AboutImage} alt='online-shopping-image' className='w-full lg:w-1/2 p-12' />
      </div>
    </section>
  );

};

export default AboutPage;