// Components
import CategoryCard from "../../../components/card/CategoryCard.jsx";
// Data
import { category } from '../../../data/previewData.jsx' ;

const CategoryShowcase = () => {
  return (
    <section className='mt-20 flex flex-col md:flex-row gap-4 text-center'>
      <div className='w-full md:w-1/2 lg:w-1/5'>
        {category.slice(1, 3).map((item, index) => (
          <CategoryCard 
            key={index}
            button={true} 
            background={item.image} 
            text={item.header} 
            cardStyle={'h-64 md:h-64 lg:h-80 '} 
            bgStyle={'h-64 md:h-full lg:h-[22rem]'} 
          />
        ))}
      </div>
      <div className='w-full md:w-1/2 lg:w-3/5'>
        {category.slice(0, 1).map((item, index) => (
          <CategoryCard 
            key={index}
            button={true} 
            background={item.image} 
            text={item.header} 
            cardStyle={'h-64 md:h-full'} 
            bgStyle={'h-64 md:h-[33rem] lg:h-[41rem] '} 
          />
        ))}
      </div>
      <div className='w-full md:w-1/2 lg:w-1/5'>
        {category.slice(3,5).map((item, index) => (
          <CategoryCard 
            key={index}
            button={true} 
            background={item.image} 
            text={item.header} 
            cardStyle={'h-64 md:h-64 lg:h-80 '} 
            bgStyle={'h-64 md:h-full lg:h-[22rem]'} 
          />
        ))}
      </div>
    </section>
  );
};

export default CategoryShowcase;