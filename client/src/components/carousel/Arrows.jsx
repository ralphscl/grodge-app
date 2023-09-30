import PropTypes from 'prop-types';

const Arrows = ({ prevSlide, nextSlide}) => {
    return (
        <div>
            <span onClick={prevSlide} className='cursor-pointer z-40 absolute left-4 top-1/2 w-auto p-4 -mt-12 text-4xl font-bold text-black-custom opacity-30  hover:opacity-80'>
                &#10094;
            </span>
            <span onClick={nextSlide} className='cursor-pointer z-40 absolute right-4 top-1/2 w-auto p-4 -mt-12 text-4xl font-bold text-black-custom opacity-30  hover:opacity-80'>
                &#10095;
            </span>
        </div>
    )
}

Arrows.propTypes = {
    prevSlide: PropTypes.func,
    nextSlide: PropTypes.func,
};

export default Arrows;