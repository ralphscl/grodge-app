import { useContext } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
// Context
import { UserContext } from "../context/UserContext";
// Data
import { productMenu } from "../data/navData";
// Component
import AccountDashboard from "./account/AccountDashboard";
import AccountInformation from "./account/AccountInformation";

const ProductPage = () => {
  const { user, ready } = useContext(UserContext);
  const { subpage } = useParams();
  
  if(!ready) {
    return <p className='text-center'>Loading...</p>
  }

  if(ready && !user) {
    return <Navigate to={'/login'} />
  }


  const setNavClass = (type) => {
    let classes = 'sidenav-links';
    if(type === subpage || (subpage === undefined && type === 'account')) {
      classes += ' bg-accent-primary text-white-custom rounded';
    }

    return classes;
  }
  
  return (
    <div className='flex gap-4'>
      <nav className='w-3/12 h-96 p-4 ms-20'>
        <h1 className='mx-2 mt-4 text-2xl font-bold text-black-custom'>My Account</h1>
        <hr className='w-16 h-1 mt-1 mb-4 bg-black' />
        {productMenu.map(({label, value, target}) => {
          return <Link key={label} to={target}> <p className={setNavClass(value.toLowerCase())}> {label}</p> </Link>
        })}
      </nav>

      <section className='w-9/12 h-auto6 px-4 my-8 me-20'>
        
      </section>
    </div>
  )
}

export default ProductPage;