// Components
import NavRouter from '../NavRouter';
// Data
import { navLinks, userMenu } from '../../data/navigationData.jsx';
// Asset
import grodgeLogoBlack from '../../assets/png/grodge-text-black-transparent.png';

const Header = () => {
  return (
    <div className='px-24 py-4 w-full flex gap-2 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]'>
      <div className="w-3/12 text-start">
        <NavRouter key={'logo'} component={<img src={grodgeLogoBlack} alt="grodge-sale-logo" width={150} />} />
      </div>

      <div className='w-5/12 flex justify-start items-center'>
        <ul className='navbar-links flex justify-start gap-2'>
          {navLinks.map(({link, target}, index) => {
            return <NavRouter key={index} component={<li>{link}</li>} target={target} />
          })} 
        </ul>
      </div>
      
      <div className="navbar-icons w-4/12 flex justify-end items-center gap-4">
        {userMenu.map(({icon, target}, index) => {
          return target ? <NavRouter key={index} component={icon} target={target} /> : icon;
        })}
      </div>
    </div>
  );
}

export default Header;