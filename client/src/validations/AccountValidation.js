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
      }
    ]
  };