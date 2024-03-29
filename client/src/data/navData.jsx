// User Menu Icons
import { ReactComponent as Account } from '../assets/svg/user.svg';
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
    link: 'Blog',
    target: '/blog'
  },{
    link: 'About',
    target: '/about-us'
  },{
    link: 'Contact',
    target: '/contact-us'
  },
];

/**
 * Account Dashboard Menu
 */
export const accountMenu = [
  {
    label: 'Account Dashboard',
    value: 'account',
    component: <Account />,
    target: '/account'
  },
  {
    label: 'Account Information',
    value: 'information',
    component: <Account />,
    target: '/account/information'
  },
  {
    label: 'My Basket',
    value: 'basket',
    component: <ShoppingBag />,
    target: '/account/basket'
  },
  {
    label: 'My Wishlist',
    value: 'wishlist',
    component: <WishList />,
    target: '/account/wishlist'
  },
  {
    label: 'Newsletter Subscription',
    value: 'newsletter',
    component: '',
    target: '/account/newsletter'
  }
];

/**
 * Product Dashboard Menu
 */
export const productMenu = [
  {
    label: 'Product Dashboard',
    value: 'product',
    component: '',
    target: '/product'
  },
  {
    label: 'Manage Products',
    value: 'product',
    component: '',
    target: '/product/manage'
  }
];