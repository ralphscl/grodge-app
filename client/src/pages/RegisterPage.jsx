import { useReducer, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// Package
import axios from "axios";
// Reducer
import { userInitial, formReducer } from "../reducers/AccountReducer";
// Validation
import { validationRules } from "../validations/AccountValidation";
// Data
import { gender } from "../data/optionData.jsx";

function RegisterPage() {
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
      if (rules && Array.isArray(rules)) {
        for (const rule of rules) {
          if (rule.condition(formData[field], formData)) {
            errors[field] = rule.message;
            break; // Stop checking further rules for this field if one fails
          }
        }
      }
    }
    setErrors(errors);
    createUser(errors);
  }

  const createUser = async (errorFields) => {
    dispatch({ type: 'FORM_LOADING' });

    // Construct a date string in the format "YYYY-MM-DD"
    const dateObject = new Date(formData.birthdate);
    const epochTimestamp = dateObject.getTime();
    
    try {

      if(Object.keys(errorFields).length === 0) {
        
        // Check if current email is subscribed to newsletter
        const subscribed = await axios.get(`/newsletter/subscription?email=${formData.email}`);

        // Add email to newsletter subscription
        if (!subscribed.data) {
          await axios.post('newsletter/subscribe', {
            email: formData.email,
          });
        }

        // Register email
        await axios.post('/register', {
          name: {
            first: formData.firstName,
            last: formData.lastName
          },
          birthdate: epochTimestamp.toString(),
          gender: formData.gender,
          contact: formData.contact,
          email: formData.email,
          password: formData.password,
          agreement: {},
          dateCreated: new Date().getTime().toString(),
        });

        dispatch({ type: 'FORM_SUCCESS' });
        alert('Register sucessful. Now you can login');

        navigate("/login");
      } else {
        dispatch({ type: 'FORM_FAILURE' });
      }
    } catch (e) {
      dispatch({ type: 'FORM_FAILURE' });
      alert('Registration failed. Please try again later.');
    }
  }

  return (
    <div className="grid place-items-center h-screen">
      <div className="grow">

        <form className="p-8 max-w-2xl mx-auto border rounded-xl shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]" onSubmit={handleSubmit}>
        <h1 className="mb-8 text-4xl text-center">Registration</h1>

          {/* Name */}
          <div className="py-1 flex">
            <div>
              <h3 className="text-bold">Full Name</h3>
              <div className="flex">
                <input 
                  type="text" 
                  placeholder="First"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-1/2 me-1 rounded focus:outline-none focus:bg-white ${errors.firstName ? 'border border-red-500' : 'border border-gray-200'}` }
                />
                <input 
                  type="text" 
                  placeholder="Last" 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-1/2 me-1 rounded focus:outline-none focus:bg-white ${errors.lastName ? 'border border-red-500' : 'border border-gray-200'}` }
                />
              </div>
            </div>
          </div>

          {/* Birthdate and Gender */}
          <div className="py-1">
            <div className="flex">

              <div className="w-1/2 me-1">
                <h3 className="text-bold">Birthdate</h3>
                <input 
                  type="date" 
                  name="birthdate"
                  value={formData.birthdate}
                  onChange={handleChange}
                  className={`rounded focus:outline-none focus:bg-white ${errors.firstName ? 'border border-red-500' : 'border border-gray-200'}` }
                />
              </div>
              
              <div className="w-1/2 me-1">
                <h3 className="text-bold">Gender</h3>
                <select
                  value={formData.gender}
                  name="gender"
                  onChange={handleChange}
                  className={`mt-2 rounded focus:outline-none focus:bg-white ${errors.gender ? 'border border-red-500' : 'border border-gray-200'}` }
                >
                  <option value="">Select an option</option>
                  {gender.map(item => {
                    return <option key={item.value} value={item.value}>{item.text}</option>
                  })}
                </select>
              </div>
                
            </div>
          </div>

          {/* Email and Contact */}
          <div className="py-1 flex">
            <div className="w-1/2 me-1">
              <h3 className="text-bold">Email</h3>
              <input 
                type="email"
                placeholder="email@domain.com" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-1/2 me-1 rounded focus:outline-none focus:bg-white ${errors.email ? 'border border-red-500' : 'border border-gray-200'}` }
              />
            </div>

            <div className="w-1/2">
              <h3 className="text-bold">Contact Number</h3>
              <input 
                type="text" 
                placeholder="(+63) 000 000 0000"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className={`w-1/2 me-1 rounded focus:outline-none focus:bg-white ${errors.contact ? 'border border-red-500' : 'border border-gray-200'}` }
                />
            </div>
          </div>

          {/* Password */}
          <div className="py-1">
            <h3 className="text-bold">Password</h3>
            <div className="flex">
              <input 
                type="password" 
                placeholder="password" 
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-1/2 me-1 rounded focus:outline-none focus:bg-white ${errors.password ? 'border border-red-500' : 'border border-gray-200'}` }
              />
              <input
                type="password" 
                placeholder="confirm"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-1/2 me-1 rounded focus:outline-none focus:bg-white ${errors.password ? 'border border-red-500' : 'border border-gray-200'}` }
              />
            </div>
          </div>

          <button 
            className="py-2 primary"
            disabled={formData.loading ? true : false}
          >
            {formData.loading ? 'Loading' : 'Register'}
          </button>
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

export default RegisterPage;