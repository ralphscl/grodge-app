import Banner from '../../components/banner/Banner';

const AboutPage = () => {

  return (
    <section>
      <Banner page='About Us!' prevPage={[{page: 'Home', to: '/' }]} />
      
    </section>
  );

};

export default AboutPage;