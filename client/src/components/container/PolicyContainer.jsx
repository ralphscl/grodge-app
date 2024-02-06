import PolicyCard from "../card/PolicyCard";

const PolicyContainer = () => {
  return (
    <section className='my-10 mx-8 md:mx-16 lg:mx-32 xl:mx-52 flex flex-col md:flex-row gap-4'>
      {[0,1,2].map((index) => (
        <div className='w-full md:w-1/3'>
          <PolicyCard />
        </div>
      ))}
    </section>
  );
};

export default PolicyContainer;