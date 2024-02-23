import Banner from '../../components/banner/Banner';

const AboutPage = () => {

  return (
    <section>
      <Banner page='About Us!' prevPage={[{page: 'Home', to: '/homepage' }]} />
    </section>
  );

};

export default AboutPage;