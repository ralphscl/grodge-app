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
    let classes = 'mt-2 py-1 px-2 rounded hover:bg-accent-secondary hover:text-white-custom';
    if(type === subpage || (subpage === undefined && type === 'account')) {
      classes += ' bg-accent-primary text-white-custom rounded';
    }

    console.log(classes)
    return classes;
  }

  return (
    <div className='flex gap-1'>
      <nav className='w-2/12 h-96 p-4 m-8 rounded shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]'>
        <h1 className='text-lg text-center'>My Profile</h1>
        <hr className="mb-8"/>
        {userMenu.map(({label, target}) => {
          return <NavRouter key={label} component={<p className={setNavClass(label.toLowerCase())}>{label}</p>} target={target}/>;
        })}
      </nav>

      <section className='w-10/12 h-auto p-4 my-8'>
        content
      </section>
    </div>
  )
}

export default AccountPage;