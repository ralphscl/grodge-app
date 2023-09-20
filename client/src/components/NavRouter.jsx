import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavRouter = ({component, target="/"}) => {
    return (
        <Link to={target}>
            {component}
        </Link>
    );
}

NavRouter.propTypes = {
    component: PropTypes.element.isRequired,
    target: PropTypes.string.isRequired
};
  
export default NavRouter;