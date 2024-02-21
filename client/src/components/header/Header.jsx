import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
// Components
import DropdownMenu from './components/DropdownMenu';
// Context
import { UserContext } from '../../context/UserContext';
// Data
import { navLinks, accountMenu } from '../../data/navData.jsx';
// Asset
import grodgeLogoBlack from '../../assets/png/grodge-text-black-transparent.png';
import { ReactComponent as Profile } from '../../assets/svg/user.svg';
import { ReactComponent as Search } from '../../assets/svg/magnifying.svg';

const Header = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const onLogout = async () => {
    await axios.post('/logout').then(() => {
      navigate('/login');
      setUser(null);
    });
  }

  return (
    <nav className='bg-white px-24 py-4 w-full sticky top-0 flex gap-2 z-50 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]'>
      <div className="w-4/12 text-start">
        <Link key={'logo'} to='/'> {<img src={grodgeLogoBlack} alt="grodge-sale-logo" width={150} />} </Link>
      </div>

      <div className='w-4/12 flex justify-center items-center'>
        <ul className='navbar-links flex justify-start gap-2'>
          {navLinks.map(({link, target}, index) => {
            return <Link key={index} to={target}> {<li>{link}</li>} </Link>
          })} 
        </ul>
      </div>
      
      <div className="w-4/12 flex justify-end items-center gap-4 navbar-icons ">
        <Search />

        {accountMenu.slice(2,4).map(({component, target}, index) => {
          return <Link key={index} to={target}> {component} </Link>
        })}
        
        {!user ? 
          <Link key='login' to='/login'> <Profile /> </Link>
          : 
          <DropdownMenu 
            key='menu' 
            user={user}
            onLogout={onLogout} 
            trigger={
              <Profile 
                className='stroke-accent-primary hover:stroke-accent-secondary'/>
            } /> 
        }
      </div>
    </nav>
  );
}

export default Header;