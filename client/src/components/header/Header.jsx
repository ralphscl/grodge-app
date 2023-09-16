import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// Components
import NavRouter from '../NavRouter';
import NavMenu from '../NavMenu';
// Context
import { UserContext } from '../../context/UserContext';
// Data
import { navLinks } from '../../data/navData.jsx';
// Asset
import grodgeLogoBlack from '../../assets/png/grodge-text-black-transparent.png';
import { ReactComponent as Profile } from '../../assets/svg/user.svg';
import { ReactComponent as Search } from '../../assets/svg/magnifying.svg';

const Header = () => {
  const navigate = useNavigate()
  const { user, setUser } = useContext(UserContext);

  const onLogout = async () => {
    await axios.post('/logout').then(() => {
      navigate('/');
      setUser(null);
    });
  }

  return (
    <nav className='px-24 py-4 w-full flex gap-2 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]'>
      <div className="w-4/12 text-start">
        <NavRouter key={'logo'} target='/' component={<img src={grodgeLogoBlack} alt="grodge-sale-logo" width={150} />} />
      </div>

      <div className='w-4/12 flex justify-center items-center'>
        <ul className='navbar-links flex justify-start gap-2'>
          {navLinks.map(({link, target}, index) => {
            return <NavRouter key={index} component={<li>{link}</li>} target={target} />
          })} 
        </ul>
      </div>
      
      <div className="w-4/12 flex justify-end items-center gap-4 navbar-icons ">
        <Search />
        {!user ? 
          <>
          <NavRouter 
            key='login' 
            component={<Profile />} 
            target={'/login'} /> 
          </>
          : 
          <>
          <NavMenu 
            key='menu' 
            user={user}
            onLogout={onLogout} 
            trigger={
              <Profile 
                className='stroke-accent-primary hover:stroke-accent-secondary'/>
            } /> 
          </>
        }  
      </div>
    </nav>
  );
}

export default Header;