// User Menu Icons
import { ReactComponent as Profile } from '..//assets/svg/user.svg';
import { ReactComponent as ShoppingBag } from '../assets/svg/bag.svg';
import { ReactComponent as WishList } from '../assets/svg/heart.svg';

/**
 * Navigation Link
 */
export const navLinks = [
  {
    link: 'Home',
    target: '/'
  },{
    link: 'Shop',
    target: '/shop'
  },{
    link: 'Contact',
    target: '/contact'
  },{
    link: 'Blog',
    target: '/blog'
  },{
    link: 'About',
    target: '/about'
  },
];

/**
 * User Menu
 */
export const userMenu = [
  {
    label: 'Profile',
    icon: <Profile className='inline group-hover:stroke-white' />,
    target: '/profile'
  },
  {
    label: 'Cart',
    icon: <ShoppingBag className='inline group-hover:stroke-white' />,
    target: '/cart'
  },
  {
    label: 'Wishlist',
    icon: <WishList className='inline group-hover:stroke-white' />,
    target: '/wishlist'
  }
];