import { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
// Package
import axios from "axios";
// Reducer
import { userInitial, formReducer } from "../reducers/AccountReducer";
// Data
import { gender, month } from "../data/data";
// Utils
import { generateYearArray, getDaysOfMonth } from "../utils/DateUtils";

function RegisterPage() {
  const [formData, dispatch] = useReducer(formReducer, userInitial);
  const [days, setDays] = useState(null);

  useEffect(() => {
    setDays(getDaysOfMonth(2023, '00'));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'UPDATE_FIELD', field: name, value });
  }
  
  const handleMonthChange = (field, subfield, value) => {
    dispatch({ type: 'UPDATE_NESTED_FIELD', field, subfield, value });
    setDays(getDaysOfMonth(2023, '00'));
  }

  const handleReset = () => {
    dispatch({ type: 'RESET'});
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.get('/test');

    handleReset();
    console.log(formData);
  }

  return (
    <div className="grid place-items-center h-screen">
      <div className="grow">

        <form className="p-8 max-w-2xl mx-auto border rounded-xl shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]" onSubmit={handleSubmit}>
        <h1 className="mb-8 text-4xl text-center">Registration</h1>

          {/* Name and Gender */}
          <div className="py-1 flex">
            <div className="w-2/3">
              <h3 className="text-bold">Full Name</h3>
              <div className="flex">
                <input 
                  type="text" 
                  placeholder="First"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-1/2 me-1" 
                />
                <input 
                  type="text" 
                  placeholder="Last" 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-1/2 me-1" 
                />
              </div>
            </div>
            <div className="w-1/3">
              <h3 className="text-bold">Gender</h3>
              <div>
                <select
                  value={formData.gender}
                  name="gender"
                  onChange={handleChange}
                  className="my-2 py-2"
                >
                  <option value="">Select an option</option>
                  {gender.map(item => {
                    return <option key={item.value} value={item.value}>{item.text}</option>
                  })}
                </select>
              </div>
            </div>
          </div>

          {/* Birthdate */}
          <div className="py-1">
            <h3 className="text-bold">Birthday</h3>
            <div className="flex">

              <select
                value={formData.birthdate.year}
                onChange={(e) => handleMonthChange('birthdate', 'year', e.target.value)}
                className="my-2 me-1 py-2"
              >
                {generateYearArray().map((item) => {
                  return <option key={item} value={item}>{item}</option>
                })}
              </select>
              
              <select
                value={formData.birthdate.month}
                onChange={(e) => handleMonthChange('birthdate', 'month', e.target.value)}
                className="my-2 me-1 py-2"
              >
                {month.map(item => {
                  return <option key={item.value} value={item.value}>{item.text}</option>
                })}
              </select>

              <select
                value={formData.birthdate.day}
                onChange={(e) => handleMonthChange('birthdate', 'day', e.target.value)}
                className="my-2 me-1 py-2"
              >
                {days?.map(item => {
                  return <option key={item} value={item}>{item}</option>
                })}
              </select>
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
                className="w-1/2 me-1"
              />
              <input
                type="password" 
                placeholder="confirm"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-1/2"
              />
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

export default RegisterPage;