import { useEffect, useState } from 'react';
// Packages
import axios from 'axios';
import PropTypes from 'prop-types';

const AccountDashboard = ({userId}) => {
  const [formData, setFormData] = useState({});
  
  useEffect(() => {
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
  
  console.log(formData);
  return (
    <>
      content
    </>
  )
}

AccountDashboard.propTypes = {
  userId: PropTypes.string.isRequired
};

export default AccountDashboard;