import { useContext } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
// Context
import { UserContext } from "../context/UserContext";
// Data
import { accountMenu } from "../data/navData";
// Component
import AccountDashboard from "./account/AccountDashboard";
import AccountInformation from "./account/AccountInformation";

const AccountPage = () => {
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
    <div className='flex flex-col md:flex-row gap-4'>
      <div className='md:w-3/12 md:ms-6 lg:ms-20'>  
        <nav className='h-96 p-4'>
          <h1 className='mx-2 mt-4 text-2xl font-bold text-black-custom'>My Account</h1>
          <hr className='w-16 h-1 mt-1 mb-4 bg-black' />
          {accountMenu.map(({label, value, target}) => {
            return <Link key={label} to={target}> <p className={setNavClass(value.toLowerCase())}> {label}</p> </Link>
          })}
        </nav>
      </div>

      <div className='md:w-9/12 md:me-6 lg:me-20'>
        <section className='h-auto px-4 my-8'>
          {subpage == undefined ? 
            <AccountDashboard userId={user._id} email={user.email} /> 
          : subpage == 'information' ?
            <AccountInformation userId={user._id} />
          : 'content'}
        </section>
      </div>
    </div>
  )
}

export default AccountPage;