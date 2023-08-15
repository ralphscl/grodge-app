import PropTypes from 'prop-types';

const Logo = ({image}) => {
    return (
        <a href="/" className="w-4/12">
            {image}
        </a>
    )
}

Logo.propTypes = {
    image: PropTypes.element.isRequired,
};
  
export default Logo;