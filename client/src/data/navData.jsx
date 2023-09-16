// User Menu Icons
import { ReactComponent as Account } from '..//assets/svg/user.svg';
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
    label: 'Account',
    component: <Account className='inline group-hover:stroke-white' />,
    target: '/account'
  },
  {
    label: 'Cart',
    component: <ShoppingBag className='inline group-hover:stroke-white' />,
    target: '/account/cart'
  },
  {
    label: 'Wishlist',
    component: <WishList className='inline group-hover:stroke-white' />,
    target: '/account/wishlist'
  }
];