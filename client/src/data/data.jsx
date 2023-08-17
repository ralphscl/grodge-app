import { ReactComponent as ShoppingBag } from '../assets/svg/bag.svg';
import { ReactComponent as WishList } from '../assets/svg/heart.svg';
import { ReactComponent as Search } from '../assets/svg/magnifying.svg';
import { ReactComponent as User } from '../assets/svg/user.svg';

export const navLinks = [
  {
    link: 'Home',
    target: '/'
  },{
    link: 'Home',
    target: '/home'
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
    target: 'profile'
  }
];