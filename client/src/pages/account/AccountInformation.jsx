import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// Packages
import axios from 'axios';
import PropTypes from 'prop-types';
// Data
import { gender } from '../../data/optionData';
// Utils
import { formatDate } from '../../utils/DateUtils';

const AccountInformation = ({userId}) => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true);

  const { action } = useParams();

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const profileResponse = await axios.get(`profile?userId=${userId}`);
        const profileData = profileResponse.data;

        // Merge the data from both responses
        const updatedFormData = {
          ...profileData,
        };

        setFormData(updatedFormData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    
    try {
      fetchData();
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
    
  }, []);

  if(loading) {
    return <p className='text-center'>Loading...</p>
  }
  
  return (
    <>
			<h2 className='bt-4 mb-2 text-md font-bold font-sans'>ACCOUNT INFORMATION</h2>

      {/* Name */}
      <div>
        <h3 className='mt-2 font-bold'>Name</h3>
        <div className='mb-2 flex gap-4'>
          <input type='text' className='w-1/3' value={formData.userDetails?.name?.first} disabled />
          <input type='text' className='w-1/3' value={formData.userDetails?.name?.middle || ""} disabled  />
          <input type='text' className='w-1/3' value={formData.userDetails?.name?.last} disabled />
        </div>
      </div>
      
      {/* Birthdate and Gender */}
      <div className='flex gap-4'>
        <h2 className="w-1/2">Birthdate:</h2>
        <h2 className="w-1/2">Gender:</h2>
      </div>
      <div className='mb-2 flex gap-4'>
        <input type='date' className='w-1/2' value={formatDate(new Date(formData.userDetails?.birthdate))} disabled />
        <select className={`mt-2  focus:bg-white` } value={formData.userDetails.gender} disabled >
            {gender.map(item =>  <option key={item.value} value={item.value}>{item.text}</option> )}
          </select>
      </div>

      {/* Email and Contact */}
      {action === 'change-password' &&
        <div>
          <div className='flex gap-4'>
            <h2 className="w-1/2">Email:</h2>
            <h2 className="w-1/2">Contact:</h2>
          </div>
          <div className='mb-2 flex gap-4'>
            <input type='text' className='w-1/2' value={formData.userAccount.email} disabled />
            <input type='text' className='w-1/2' value={formData.userDetails.contact} disabled />
          </div>

          <h3 className='mt-4 mb-2 text-md font-bold font-sans'>CHANGE PASSWORD</h3>

          <h2>Password</h2>
          <input type='password' className='w-1/2' />

          <div className='flex gap-4'>
            <h2 className="w-1/2">New Password</h2>
            <h2 className="w-1/2">Confirm Password</h2>
          </div>
          <div className='flex gap-4'>
            <input type='password' className='w-1/2' />
            <input type='password' className='w-1/2' />
          </div>
        </div>
      }
    </>
  )
}

AccountInformation.propTypes = {
  userId: PropTypes.string,
  email: PropTypes.string,
};

export default AccountInformation;