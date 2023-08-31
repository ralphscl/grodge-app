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

/**
 * Gender Selection
 */
export const gender = [
  {
    text: 'Male',
    value: 'male'
  },{
    text: 'Female',
    value: 'female'
  },{
    text: 'Other',
    value: 'other'
  },
];

/**
 * Month Selection
 */
export const month = [
  {
    text: 'January',
    value: '00'
  },{
    text: 'February',
    value: '01'
  },{
    text: 'March',
    value: '02'
  },{
    text: 'April',
    value: '03'
  },{
    text: 'May',
    value: '04'
  },{
    text: 'June',
    value: '05'
  },{
    text: 'July',
    value: '06'
  },{
    text: 'August',
    value: '07'
  },{
    text: 'September',
    value: '08'
  },{
    text: 'October',
    value: '09'
  },{
    text: 'November',
    value: '10'
  },{
    text: 'December',
    value: '11'
  },
];