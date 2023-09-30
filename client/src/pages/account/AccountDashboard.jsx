import { useEffect, useState } from 'react';
// Packages
import axios from 'axios';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AccountDashboard = ({userId, email}) => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const [profileResponse, subscriptionResponse] = await Promise.all([
          axios.get(`profile?userId=${userId}`),
          axios.get(`/newsletter/subscription?email=${email}`),
        ]);

        const profileData = profileResponse.data;
        const subscriptionData = subscriptionResponse.data;

        // Merge the data from both responses
        const updatedFormData = {
          ...profileData,
          newsletterSubscription: subscriptionData,
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
    
  }, [userId, email]);

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
      <hr className='mt-4 mb-8' />

      <div className='flex h-3/6 mb-2'>
        {/* Account Information */}
        <div className='w-1/2'>
          <h2 className='my-4 text-md font-bold font-sans'>CONTACT INFORMATION</h2>
          <p>{`${formData.userDetails.name.first} ${formData.userDetails.name.last}`}</p>
          <p>{formData.userAccount.email}</p>

          <Link to="/account/information/change-password">
            <button className='my-2 me-2 py-1 px-4 border rounded-full inline border-black-custom hover:bg-accent-secondary hover:border-accent-secondary hover:text-white-custom'>
              Change Password
            </button>
          </Link>

          <button className='my-2 ms-2 py-1 px-4 border rounded-full inline bg-accent-primary border-accent-primary text-white-custom hover:bg-accent-secondary  hover:border-accent-secondary'>
            Edit
          </button>
        </div>
        
        {/* Newsletter Subscription */}
        <div className='w-1/2'>
          <h1 className='my-4 text-md font-bold font-sans'>NEWSLETTER SUBSCRIPTION</h1>
          <p>You are currently {formData.newsletterSubscription ? 'subcribed' : 'not subscribe'} to <br/>Grodge Newsletter.</p>

          <button className='my-2 py-1 px-4 border rounded-full inline bg-accent-primary border-accent-primary text-white-custom hover:bg-accent-secondary  hover:border-accent-secondary'>
            Edit
          </button>
        </div>
      </div>

      <h2 className='my-1 text-lg font-bold font-sans'>ADDRESS BOOK</h2>
      <div className='flex h-3/6 mb-2'>
        {/* Biling Address */}
        <div className='w-1/2'>
          <h2 className='my-4 text-md font-bold font-sans'>DEFAULT BILLING ADDRESSS</h2>
          <p>You have not set a default billing address.</p>

          <button className='my-2 me-2 py-1 px-4 border rounded-full inline border-black-custom hover:bg-accent-secondary hover:border-accent-secondary hover:text-white-custom'>
            Manage Addresses
          </button>

          <button className='my-2 ms-2 py-1 px-4 border rounded-full inline bg-accent-primary border-accent-primary text-white-custom hover:bg-accent-secondary  hover:border-accent-secondary'>
            Edit
          </button>
        </div>

        {/* Shipping Address */}
        <div className='w-1/2'>
          <h2 className='my-4 text-md font-bold font-sans'>DEFAULT SHIPPING ADDRESSS</h2>
          <p>You have not set a default billing address.</p>

          <button className='my-2 py-1 px-4 border rounded-full inline bg-accent-primary border-accent-primary text-white-custom hover:bg-accent-secondary  hover:border-accent-secondary'>
            Edit
          </button>
        </div>
      </div>
    </>
  )
}

AccountDashboard.propTypes = {
  userId: PropTypes.string,
  email: PropTypes.string,
};

export default AccountDashboard;