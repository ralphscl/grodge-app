import { useContext } from "react";
import { Navigate, useParams } from "react-router-dom";
// Context
import { UserContext } from "../context/UserContext";
// Data
import { userMenu } from "../data/navData";
import NavRouter from "../components/NavRouter";

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
    let classes = 'py-2 px-6';
    
    if(type === subpage || (subpage === undefined && type === 'account')) {
      classes += ' bg-accent-primary text-white-custom rounded-full';
    }

    return classes;
  }

  return (
    <>
      <nav className='mt-4 w-full flex justify-center gap-5'>
        {userMenu.map(({label, target}, index) => {
          console.log
          return <NavRouter key={index} component={<p>My {label}</p>} target={target} className={setNavClass(label.toLowerCase())}/>;
        })}
      </nav>
    </>
  )
}

export default AccountPage;