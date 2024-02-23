const Subscription = () => {

  return (
    <section className='bg-accent-primary py-10 opacity-80 text-center flex flex-col items-center'>
      <h1 className='text-white text-4xl font-bold pt-4'> SUBSCRIBE </h1>
      <p className='text-white text-1xl font-bold pb-4'>To get the latest product updates!</p>
      <form className='flex flex-row w-[36rem]'>
        <input type='text' />
        <input 
          type='submit' 
          value='SUBSCRIBE' 
          className='bg-black text-white font-bold h-10 my-2 px-4 cursor-pointer'
        />
      </form>
    </section>
  );
};

export default Subscription;