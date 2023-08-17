import PropTypes from 'prop-types';

const Logo = ({image, target="/"}) => {
    return (
        <a href={target}>
            {image}
        </a>
    )
}

Logo.propTypes = {
    image: PropTypes.element.isRequired,
    target: PropTypes.string
};
  
export default Logo;