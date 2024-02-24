import Banner from '../../components/banner/Banner';
// Components
import ContactInfo from '../../components/contactInfo/ContactInfo';

const ContactPage = () => {

  return (
    <section>
      <Banner page='Contact Us!' prevPage={[{page: 'Home', to: '/' }]} />

      <div className='flex flex-col md:flex-row px-8 py-16 md:px-4 lg:px-28 xl:px-58 2xl:px-64'>
        <div className='w-full md:w-1/2 p-4'>
          <h1 className='text-black text-2xl font-bold py-4'>Send us a Message!</h1>
          <form>
            <div className='flex flex-row md:flex-col lg:flex-row gap-2'>
              <input type='text' placeholder='Name*' />
              <input type='text' placeholder='Email*' />
            </div>
            <div className='flex flex-row md:flex-col lg:flex-row gap-2'>
              <input type='text' placeholder='Subject*' />
              <input type='text' placeholder='Phone' />
            </div>
            <textarea className='w-full h-40 p-4 border resize-none outline-none' />
          </form>
        </div>
        <div className='w-full md:w-1/2 py-4'>
          <h2 className='text-black text-2xl font-bold py-4'>Looking Forward to Hear From You</h2>
          <p className='text-black text-md py-2'>Contact sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <ContactInfo fontStyle='text-black' />
        </div>
      </div>
    </section>
  );

};

export default ContactPage;