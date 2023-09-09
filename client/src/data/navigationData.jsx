// User Menu Icons
import { ReactComponent as ShoppingBag } from '../assets/svg/bag.svg';
import { ReactComponent as WishList } from '../assets/svg/heart.svg';
import { ReactComponent as Search } from '../assets/svg/magnifying.svg';
import { ReactComponent as User } from '../assets/svg/user.svg';

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
    icon: <Search />
  },
  {
    icon: <ShoppingBag />,
    target: '/cart'
  },
  {
    icon: <WishList />,
    target: 'wishlist'
  },
  {
    icon: <User />,
    target: 'login'
  }
];