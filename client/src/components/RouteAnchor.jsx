import PropTypes from 'prop-types';

const RouteAnchor = ({image, target="/"}) => {
    return (
        <a href={target}>
            {image}
        </a>
    )
}

RouteAnchor.propTypes = {
    image: PropTypes.element.isRequired,
    target: PropTypes.string
};
  
export default RouteAnchor;