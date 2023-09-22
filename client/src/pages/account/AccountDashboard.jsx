import { useEffect, useState } from 'react';
// Packages
import axios from 'axios';
import PropTypes from 'prop-types';

const AccountDashboard = ({userId}) => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true);
  
  
  useEffect(() => {
    setLoading(true);
    axios.get(`profile?userId=${userId}`).then(({ data }) => {
      setFormData(data);
      setLoading(false);
    })
  }, []);

  if(loading) {
    return <p className='text-center'>Loading...</p>
  }
  
  return (
    <>
      <h2 className='mb-2 text-xl font-bold font-sans text-gray-600'>
        {`Hello, ${formData.userDetails?.name.first} ${formData.userDetails?.name.last}!`}
      </h2>
      <p className='font-sans'>
        From your My Account Dashboard you have the ability to view a snapshot of your recent account 
        activity and update your account information. Select a link below to view or edit information.
      </p>
      <hr className='mx-6 my-4' />
    </>
  )
}

AccountDashboard.propTypes = {
  userId: PropTypes.string.isRequired
};

export default AccountDashboard;