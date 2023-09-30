import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
// Components
import CarouselContent from "./CarouselContent";
import Arrows from "./Arrows";
import Dots from "./Dots";
// Data
import carouselData from "../../data/carouselData";

const carouselLength = carouselData.length - 1

const Carousel = ({ delay = 5000 }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log(activeIndex)
            setActiveIndex(activeIndex === carouselLength ? 0 : activeIndex + 1);
        }, delay);
        return () => clearInterval(interval);
    }, [activeIndex])

    return (
        <div className='w-full h-1/2 relative m-auto overflow-hidden'>
            <CarouselContent activeIndex={activeIndex} carouselData={carouselData} />
            <Arrows 
                prevSlide={() => setActiveIndex(activeIndex < 1 ? carouselLength : activeIndex - 1)}
                nextSlide={() => setActiveIndex(activeIndex === carouselLength ? 0 : activeIndex + 1)}
            />
            <Dots activeIndex={activeIndex} carouselData={carouselData} onClick={(activeIndex) => setActiveIndex(activeIndex)}/>
        </div>
    )
}

Carousel.propTypes = {
    delay: {type: PropTypes.number }
}

export default Carousel;