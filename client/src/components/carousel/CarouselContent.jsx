import PropTypes from 'prop-types';

const CarouselContent = ({ activeIndex, carouselData}) => {
  return (
    <section>
        {carouselData.map((carousel, index) => {
          return (
            <div
              key={index}
              className={index === activeIndex ? 'w-screen h-96 md:h-[74vh] relative inline-block' : 'hidden'}
            >
              <img className='h-full w-full absolute object-cover ' src={carousel.url} alt={carousel.title} />

              {/* Overlay color */}
              <div className="absolute inset-0 bg-accent-primary opacity-20"></div>
              <h2 className={carousel.style.title}>{carousel.title}</h2>
              <h3 className={carousel.style.desc}>{carousel.description}</h3>
            </div> 
          )
      })}
    </section>
  )
}

CarouselContent.propTypes = {
  activeIndex: PropTypes.number,
  carouselData: PropTypes.array.isRequired
};

export default CarouselContent;