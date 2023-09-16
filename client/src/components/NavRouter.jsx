import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavRouter = ({component, target="/", className=''}) => {
    return (
        <Link to={target} className={className}>
            {component}
        </Link>
    );
}

NavRouter.propTypes = {
    component: PropTypes.element.isRequired,
    target: PropTypes.string.isRequired,
    className: PropTypes.string
};
  
export default NavRouter;