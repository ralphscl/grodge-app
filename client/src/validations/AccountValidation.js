export const validationRules = {
    firstName: [
      {
        condition: (field) => !field,
        message: 'First name is required',
      }
    ],
    lastName: [
      {
        condition: (field) => !field,
        message: 'Last name is required',
      }
    ],
    gender: [
      {
        condition: (field) => !field,
        message: 'Gender is required',
      }
    ],
    birthdate: [
      {
        condition: (field, state) => {
          const { day, month, year } = state.birthdate;
    
          const birthdate = new Date(year, month, day);

          const ageInMilliseconds = new Date() - birthdate;
          const ageInYears = ageInMilliseconds / (365 * 24 * 60 * 60 * 1000);
          
          return ageInYears >= 18;
        },
        message: 'Must be 18 years old',
      },
    ],
    email: [
      {
        condition: (field) => !field,
        message: 'Email is required',
      }
    ],
    contact: [
      {
        condition: (field) => !field,
        message: 'Contact number is required',
      }
    ],
    password: [
      {
        condition: (field) => !field,
        message: 'Password is required',
      },
      {
        condition: (field) => field.length > 10,
        message: 'Password must be greater atleast 10 characters',
      },
      {
        condition: (field, state) => state.password !== state.confirmPassword,
        message: 'Passwords do not match',
      }
    ]
  };