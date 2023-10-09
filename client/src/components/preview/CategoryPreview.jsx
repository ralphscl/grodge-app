import BgFashion from "../../assets/jpeg/pexels-redrec-2446569.jpg";
import BG_Perfumes from "../../assets/jpeg/freepik-still-life-cosmetic-products.jpg";
import BG_Furnitures from "../../assets/jpeg/freepik-still-life-with-vases-with-spring-flowers-living-room.jpg";
import BG_Accessories from "../../assets/jpeg/freepik-close-up-male-hand-pocket-with-modern-elegant-wristwatch.jpg"; 
import BG_Footwears from "../../assets/jpeg/freepik-men-white-espadrilles-slip-shoes.jpg";
import Card from "../card/Card";

const CategoryPreview = () => {
  return (
    <section className='my-20 mx-8 md:mx-16 lg:mx-32 xl:mx-64 flex flex-col md:flex-row gap-4 text-center'>
      <div className='w-full md:w-1/2 lg:w-1/5'>
        <Card background={BG_Perfumes} text='Perfumes' />
        <Card background={BG_Furnitures} text='Home Decor' />
      </div>
      <div className='w-full md:w-1/2 lg:w-3/5'>
        <div className='w-full mb-6 md:mb-8 relative overflow-hidden'>
          <img
            className='w-full h-64 md:h-[34rem] lg:h-[42rem] object-cover hover:scale-110 transition duration-500 cursor-pointer'
            src={BgFashion}
            alt='Fashion Background'
          />
          <button className='py-2 px-4 absolute text-black-custom text-base md:text-lg lg:text-xl font-bold bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-100'>
            {'Fashion'}
          </button>
        </div>
      </div>
      <div className='w-full md:w-1/2 lg:w-1/5'>
        <Card background={BG_Footwears} text='Footwears' />
        <Card background={BG_Accessories} text='Accessories' />
      </div>
    </section>
  );
};

export default CategoryPreview;