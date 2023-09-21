import { useEffect, useReducer, useState } from 'react';
// Packages
import axios from 'axios';
// Reducer
import { formReducer, userInitial } from '../../reducers/AccountReducer.jsx';
// Data
import { gender, month } from "../../data/optionData.jsx";
// Utils
import { generateYearArray, getDaysOfMonth } from "../../utils/DateUtils";

const AccountData = ({userId}) => {
  const [formData, setFormData] = useState({});
  const [editMode, setEditMode] = useState(true);
  const [errors, setErrors] = useState({});
  const [days, setDays] = useState(null);
  
  useEffect(() => {
    setDays(getDaysOfMonth(2023, '00'));
    axios.get(`profile?userId=${userId}`).then(({ data }) => {
      setFormData({
        firstName: data.userDetails.name.first,
        lastName: data.userDetails.name.last,
        gender: data.userDetails.gender,
        contact: data.userDetails.contact,
        email: data.userAccount.email
      })
    })
  }, []);
  
  return (
    <>
      <form className="me-8 pt-12 px-4 w-3/4 h-5/6 relative bg-white rounded shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
        <button 
          type='button'
          className='px-2 py-1 absolute top-4 right-4 text-sm bg-accent-primary text-white-custom rounded hover:bg-accent-secondary' 
          onClick={() => setEditMode(!editMode)}
        >
            Edit
        </button>

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
                  // onChange={handleChange}
                  disabled={editMode}
                  className={`w-1/2 me-1 rounded focus:outline-none focus:bg-white ${errors.firstName ? 'border border-red-500' : 'border border-gray-200'}` }
                />
                <input 
                  type="text" 
                  placeholder="Last" 
                  name="lastName"
                  value={formData.lastName}
                  // onChange={handleChange}
                  disabled={editMode}
                  className={`w-1/2 me-1 rounded focus:outline-none focus:bg-white ${errors.lastName ? 'border border-red-500' : 'border border-gray-200'}` }
                />
              </div>
            </div>
            <div className="w-1/3">
              <h3 className="text-bold">Gender</h3>
              <div>
                <select
                  value={formData.gender}
                  name="gender"
                  // onChange={handleChange}
                  disabled={editMode}
                  className={`my-2 py-2" rounded focus:outline-none focus:bg-white ${errors.gender ? 'border border-red-500' : 'border border-gray-200'}` }
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
                // value={formData.birthdate.year}
                // onChange={(e) => handleMonthChange('birthdate', 'year', e.target.value)}
                disabled={editMode}
                className={`w-1/2 me-1 rounded focus:outline-none focus:bg-white ${errors.birthdate ? 'border border-red-500' : 'border border-gray-200'}` }
              >
                {generateYearArray().map((item) => {
                  return <option key={item} value={item}>{item}</option>
                })}
              </select>
              
              <select
                // value={formData.birthdate.month}
                // onChange={(e) => handleMonthChange('birthdate', 'month', e.target.value)}
                disabled={editMode}
                className={`w-1/2 me-1 rounded focus:outline-none focus:bg-white ${errors.birthdate ? 'border border-red-500' : 'border border-gray-200'}` }
              >
                {month.map(item => {
                  return <option key={item.value} value={item.value}>{item.text}</option>
                })}
              </select>

              <select
                // value={formData.birthdate.day}
                // onChange={(e) => handleMonthChange('birthdate', 'day', e.target.value)}
                disabled={editMode}
                className={`w-1/2 me-1 rounded focus:outline-none focus:bg-white ${errors.birthdate ? 'border border-red-500' : 'border border-gray-200'}` }
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
                // onChange={handleChange}
                disabled={editMode}
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
                // onChange={handleChange}
                disabled={editMode}
                className={`w-1/2 me-1 rounded focus:outline-none focus:bg-white ${errors.contact ? 'border border-red-500' : 'border border-gray-200'}` }
                />
            </div>
          </div>

          {!editMode && 
            <button 
              className="py-2 primary"
              // disabled={formData.loading ? true : false}
            >
              Update
            </button>
          }
      </form>
    </>
  )
}


export default AccountData;