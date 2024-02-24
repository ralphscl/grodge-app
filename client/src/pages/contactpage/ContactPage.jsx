import Banner from '../../components/banner/Banner';
// Components
import ContactInfo from '../../components/contactInfo/ContactInfo';

const ContactPage = () => {

  return (
    <section>
      <Banner page='Contact Us!' prevPage={[{page: 'Home', to: '/' }]} />

      <div className='flex flex-col md:flex-row px-8 md:px-4 lg:px-28 xl:px-58 2xl:px-64'>
        <div className='w-1/2'>
          
        </div>
        <div className='w-1/2'>
          <h2 className='text-black text-2xl font-bold py-2'>Looking Forward to Hear From You</h2>
          <p className='text-black text-md py-2'>Contact sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <ContactInfo fontStyle='text-black' />
        </div>
      </div>
    </section>
  );

};

export default ContactPage;