import { useReducer } from "react";
import { Link } from "react-router-dom";
// Reducer
import { userInitial, formReducer } from "../reducers/AccountReducer";

const LoginPage = () => {
  const [formData, dispatch] = useReducer(formReducer, userInitial);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'UPDATE_FIELD', field: name, value });
  }

  const handleReset = () => {
    dispatch({ type: 'RESET'});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleReset();
    console.log(formData)
  }

  return (
    <div className="grid place-items-center h-screen">
      <div className="grow">

        <form className="bg-slate-0 p-8 max-w-md mx-auto border rounded-xl shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]" onSubmit={handleSubmit}>
        <h1 className="mb-8 text-4xl text-center">Login</h1>
          <input 
            type="email" 
            placeholder="your@email.com" 
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input 
            type="password" 
            placeholder="password" 
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

          <button className="primary">Login</button>
          <p className="py-2 text-center text-gray-500">
            {"Don't an account yet? "}
            <Link 
              to="/register" 
              className="underline hover:text-accent-primary"
            >
              Register here
            </Link>
          </p>
        </form>
        
      </div>
    </div>
  );
}

export default LoginPage;