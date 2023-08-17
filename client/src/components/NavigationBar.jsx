// Components
import RouteAnchor from '../components/RouteAnchor';
// Data
import { navLinks, userMenu } from '../data/data.jsx';
// Asset
import grodgeLogoBlack from './../assets/png/grodge-text-black-transparent.png';

const NavigationBar = () => {
  console.log(navLinks)
  console.log(userMenu)
  return (
    <div className='px-24 py-4 flex gap-2 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]'>
      <div className="w-3/12 text-start">
        <RouteAnchor image={<img src={grodgeLogoBlack} alt="grodge-sale-logo" width={150} />} />
      </div>

      <div className='w-5/12 flex justify-start items-center'>
        <ul className='navbar-links flex justify-start gap-2'>
          {navLinks.map(({link, target}, index) => {
            return <li key={index}><a href={target}>{link}</a></li>
          })}
        </ul>
      </div>
      
      <div className="navbar-icons w-4/12 flex justify-end items-center gap-4">
        {userMenu.map(({icon, target}) => {
          return target ? <RouteAnchor image={icon} target={target} /> : icon;
        })}
      </div>
    </div>
  )
}

export default NavigationBar;