import PropTypes from 'prop-types';

const Dots = ({ activeIndex, onClick, carouselData }) => {
    return (
        <div className='w-screen h-14 absolute flex bottom-1 justify-center z-30'>
            {carouselData.map((carousel, index) => {
                return (
                    <span
                        key={index}
                        className={`h-4 w-4 mx-1 rounded-[50%] inline-block bg-black-custom opacity-30 cursor-pointer  ${activeIndex === index && 'opacity-80'}`}
                        onClick={() => onClick(index)}
                    ></span>
                )
            })}
        </div>
    )
}

Dots.propTypes = {
    activeIndex: PropTypes.number,
    onClick: PropTypes.func,
    carouselData: PropTypes.array.isRequired
};

export default Dots;