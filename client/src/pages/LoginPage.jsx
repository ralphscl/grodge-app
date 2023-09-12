import { useState, useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";
// Package
import axios from "axios";
// Reducer
import { userInitial, formReducer } from "../reducers/AccountReducer";
// Validation
import { validationRules } from "../validations/AccountValidation";

const LoginPage = () => {
  const navigate = useNavigate();
  
  const [formData, dispatch] = useReducer(formReducer, userInitial);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'FIELD_UPDATE', field: name, value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    validateFields();
  }

  const validateFields = () => {

    const errors = {};
    for (const field in formData) {
      const rules = validationRules[field];
      if ((field === 'email' || field === 'password') && rules && Array.isArray(rules)) {
        for (const rule of rules) {
          if (rule.condition(formData[field], formData)) {
            errors[field] = rule.message;
            break; // Stop checking further rules for this field if one fails
          }
        }
      }
    }
    setErrors(errors);
    authenticateUser(errors);
  }

  const authenticateUser = async (errorFields) => {
    dispatch({ type: 'FORM_LOADING' });
    try {
      
      if(Object.keys(errorFields).length === 0) {

        await axios.post('/login', {
          email: formData.email,
          password: formData.password
        })
        
        dispatch({ type: 'FORM_SUCCESS' });
        alert('Login success! Welcome!');

        navigate("/");
      } else {
        dispatch({ type: 'FORM_FAILURE' });
      }
    } catch (e) {
      dispatch({ type: 'FORM_FAILURE' });
    }
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
            className={`
              w-1/2 me-1 rounded 
              focus:outline-none 
              focus:bg-white 
              ${errors.email ? 'border border-red-500' : 'border border-gray-200'}
            `}
          />
          
          <input 
            type="password" 
            placeholder="password" 
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`
              w-1/2 me-1 rounded 
              focus:outline-none 
              focus:bg-white 
              ${errors.password ? 'border border-red-500' : 'border border-gray-200'}
            `}
          />

          <button 
            className="primary"
            disabled={formData.loading ? true : false}
          >
            {formData.loading ? 'Loading' : 'Login'}
          </button>
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