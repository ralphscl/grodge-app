import { profileIcons } from '../../data/profileData';

const ContactInfo = ({ fontStyle }) => {

  return ( 
  <>
    {profileIcons.map((profile, index) => {
        // Get the key of the object
      const key = Object.keys(profile)[0];
        // Destructure the icon and text from the object
      const { icon: Icon, text } = profile[key];

      return (
        <p key={index} className={`p-2 flex flex-row items-center ${fontStyle}`}>
          <Icon width="32px" height="32px" className='inline' />
          <span className={`${fontStyle} px-2 w-56`}>{text}</span>
        </p>
      );
    })}
  </>
  );
}
  
export default ContactInfo;
