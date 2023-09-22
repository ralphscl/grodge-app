import { useContext } from "react";
import { Navigate, useParams } from "react-router-dom";
// Context
import { UserContext } from "../context/UserContext";
// Data
import { userMenu } from "../data/navData";
import NavRouter from "../components/NavRouter";
// Component
import AccountDashboard from "./account/AccountDashboard";

const AccountPage = () => {
  const { user, ready } = useContext(UserContext)
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
      <nav className='w-3/12 h-96 p-4 ms-8 me-2'>
        <h1 className='mx-2 mt-4 text-2xl font-bold text-black-custom'>My Account</h1>
        <hr className='w-16 h-1 mt-1 mb-4 ms-2 bg-black' />
        {userMenu.map(({label, value, target}) => {
          return <NavRouter key={label} component={<p className={setNavClass(value.toLowerCase())}> {label}</p>} target={target}/>;
        })}
      </nav>

      <section className='w-9/12 h-auto my-8 px-4'>
        {subpage == undefined ? <AccountDashboard userId={user._id} /> : 'content'}
      </section>
    </div>
  )
}

export default AccountPage;