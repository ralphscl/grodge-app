import { useEffect, useState } from 'react';
// Packages
import axios from 'axios';
import PropTypes from 'prop-types';
// Utils
import { dateToEpoch } from "../../utils/DateUtils";
// Data
import { gender } from '../../data/optionData';

const AccountInformation = ({userId}) => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true);
  
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

  console.log(formData.userDetails.birthdate);
  console.log(dateToEpoch(formData.userDetails.birthdate));
  console.log(formData)
  return (
    <>
			<h2 className='my-4 text-md font-bold font-sans'>ACCOUNT INFORMATION</h2>
      <div>
        <h3 className='mt-2 font-bold'>Name</h3>
        <div className='mb-4 flex gap-4'>
          <input type='text' className='w-1/3' value={formData.userDetails?.name?.first} disabled />
          <input type='text' className='w-1/3' value={formData.userDetails?.name?.middle || ""} disabled  />
          <input type='text' className='w-1/3' value={formData.userDetails?.name?.last} disabled />
        </div>
      </div>
      <div className='mb-4 flex gap-4'>
        <input type='text' className='w-1/2' value={dateToEpoch(formData.userDetails?.birthdate)} disabled />
        <select className={`mt-2  focus:bg-white` } value={formData.userDetails.gender} disabled >
            <option value="">Select an option</option>
            {gender.map(item => {
              return <option key={item.value} value={item.value}>{item.text}</option>
            })}
          </select>
      </div>
    </>
  )
}

AccountInformation.propTypes = {
  userId: PropTypes.string,
  email: PropTypes.string,
};

export default AccountInformation;