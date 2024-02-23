import Banner from '../../components/banner/Banner';

const ContactPage = () => {

  return (
    <section>
      <Banner page='Contact Us!' prevPage={[{page: 'Home', to: '/homepage' }]} />
    </section>
  );

};

export default ContactPage;