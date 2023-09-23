import { useEffect, useState } from 'react';
// Packages
import axios from 'axios';
import PropTypes from 'prop-types';

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

  console.log(formData)
  return (
    <>
			<h2 className='my-4 text-md font-bold font-sans'>CONTACT INFORMATION</h2>
    </>
  )
}

AccountInformation.propTypes = {
  userId: PropTypes.string,
  email: PropTypes.string,
};

export default AccountInformation;