// import { useReducer } from "react";
import { Link } from "react-router-dom";
// Data
import { gender } from "../data/data";

const LoginPage = () => {
  const userInitial = {
    name: {
      first: '',
      last: '',
    },
    gender: '',
    birthdate: Date(),
    contact: '',
    email: '',
    password: '',
  };

  console.log(userInitial);
  console.log(gender)
  return (
    <div className="flex justify-center items-center">
      <div className="mt-4 grow">

        <h1 className="mb-8 text-4xl text-center">Registration</h1>
        <form className="max-w-4xl mx-auto">

          <div className="py-1 flex">
            <div className="w-1/2">
              <h3 className="text-bold">Full Name</h3>
              <div className="flex">
                <input className="w-1/2 me-1" type="text" placeholder="First" />
                <input className="w-1/2 me-1" type="text" placeholder="Last" />
              </div>
            </div>
            <div className="w-1/2">
              <h3 className="text-bold">Gender</h3>
              <div>
                <input className="" type="text" placeholder="Please select an option" />
              </div>
            </div>
          </div>

          <div className="py-1">
            <h3 className="text-bold">Birthday</h3>
            <div className="flex">
              <input className="w-1/3 me-1" type="text" placeholder="Month" />
              <input className="w-1/3 me-1" type="text" placeholder="Day" />
              <input className="w-1/3" type="text" placeholder="Year" />
            </div>
          </div>

          <div className="py-1 flex">
            <div className="w-1/2 me-1">
              <h3 className="text-bold">Email</h3>
              <input type="email" placeholder="email@domain.com" />
            </div>

            <div className="w-1/2">
              <h3 className="text-bold">Contact Number</h3>
              <input type="text" placeholder="(+63) 0000 000 000)" />
            </div>
          </div>

          <div className="py-1">
            <h3 className="text-bold">Password</h3>
            <div className="flex">
              <input className="w-1/2 me-1" type="password" placeholder="password" />
              <input className="w-1/2" type="password" placeholder="confirm" />
            </div>
          </div>

          <button className="py-2 primary">Register</button>
          <p className="py-2 text-center text-gray-500">
            {"Already have an account? "} 
            <Link 
              to="/login" 
              className="underline hover:text-accent-primary"
            >
              Login here
            </Link>
          </p>
        </form>

      </div>
    </div>
  );
}

export default LoginPage;