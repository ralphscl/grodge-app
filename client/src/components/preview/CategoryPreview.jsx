// Components
import Card from "../card/Card";
// Data
import { category } from '../../data/previewData.jsx' ;

const CategoryPreview = () => {
  return (
    <section className='my-20 mx-8 md:mx-16 lg:mx-32 xl:mx-44 flex flex-col md:flex-row gap-4 text-center'>
      <div className='w-full md:w-1/2 lg:w-1/5'>
        <Card cardHeight={'h-64 md:h-64 lg:h-80 '} button={true} background={category[1].image} backgroundHeight={'h-64 md:h-full lg:h-[22rem]'} text={category[1].header} />
        <Card cardHeight={'h-64 md:h-64 lg:h-80 '} button={true} background={category[2].image} backgroundHeight={'h-64 md:h-full lg:h-[22rem]'} text={category[2].header} />
      </div>
      <div className='w-full md:w-1/2 lg:w-3/5'>
        <div className='w-full mb-4 relative overflow-hidden'>
          <img
            className='w-full h-64 md:h-[33rem] lg:h-[41rem] object-cover hover:scale-110 transition duration-500 cursor-pointer'
            src={category[0].image}
            alt='Fashion Background'
          />
          <button className='py-2 px-6 absolute text-black-custom text-base md:text-lg lg:text-xl font-bold bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-100'>
            {category[0].header}
          </button>
        </div>
      </div>
      <div className='w-full md:w-1/2 lg:w-1/5'>
        <Card cardHeight={'h-64 md:h-64 lg:h-80 '} button={true} background={category[3].image} backgroundHeight={'h-64 md:h-full lg:h-[22rem]'} text={category[3].header} />
        <Card cardHeight={'h-64 md:h-64 lg:h-80 '} button={true} background={category[4].image} backgroundHeight={'h-64 md:h-full lg:h-[22rem]'} text={category[4].header} />
      </div>
    </section>
  );
};

export default CategoryPreview;