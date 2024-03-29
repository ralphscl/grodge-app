import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
// Data
import { accountMenu, productMenu } from '../../../data/navData.jsx';

const NavMenu = ({ trigger, user, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (e) => {
    if(menuRef.current && !menuRef.current.contains(e.target)){
      setIsOpen(false);
    }
  }

  return (
    <div className='relative inline-block' ref={menuRef}>
      <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>

      {isOpen && (
        <div className='p-3 mt-8 w-48 absolute right-0 border bg-white rounded shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]'>
          <h1 className='mb-1'>Hi {`${user.name.first} ${user.name.last}`}!</h1>
          <hr className='mb-2' />

          {accountMenu.slice(0, 1).map(({target}, index) => {
            return <Link onClick={() => setIsOpen(false)} key={index} className='p-1 w-full block rounded cursor-pointer hover:bg-accent-secondary hover:text-white-custom group' to={target}>Account</Link>;
          })}

          {productMenu.slice(0, 1).map(({target}, index) => {
            return <Link onClick={() => setIsOpen(false)} key={index} className='p-1 w-full block rounded cursor-pointer hover:bg-accent-secondary hover:text-white-custom group' to={target}>Product</Link>;
          })}

          <p onClick={onLogout} className='p-1 w-full block rounded cursor-pointer hover:bg-accent-secondary hover:text-white-custom'>Logout</p>
        </div>
      )}
    </div>
  )
}

NavMenu.propTypes = {
  trigger: PropTypes.element.isRequired,
  user: PropTypes.object.isRequired,
  onLogout: PropTypes.func.isRequired
};

export default NavMenu;