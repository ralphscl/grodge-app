export const userInitial = {
  firstName: '',
  lastName: '',
  gender: '',
  birthdate: {
    day: '',
    month: '',
    year: '',
  },
  contact: '',
  email: '',
  password: '',
  confirmPassword: '',
  loading: false,
};

export const formReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.field]: action.value };
    case 'UPDATE_NESTED_FIELD':
      return { ...state, [action.field]: { ...state[action.field], [action.subfield]: action.value } };
    case 'RESET':
      return userInitial;
    default:
      return state;
  }
};