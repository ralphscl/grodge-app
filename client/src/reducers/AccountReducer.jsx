export const userInitial = {
  firstName: '',
  lastName: '',
  gender: '',
  birthdate: {
    day: '01',
    month: '00',
    year: new Date().getFullYear(),
  },
  contact: '',
  email: '',
  password: '',
  confirmPassword: '',
  loading: false,
};

const actionTypes = {
  FIELD_RESET: 'FIELD_RESET',
  FIELD_UPDATE: 'FIELD_UPDATE',
  FIELD_NESTED_UPDATE: 'FIELD_NESTED_UPDATE',
  REGISTER_LOADING: 'REGISTER_LOADING',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  REGISTER_FAILURE: 'REGISTER_FAILURE'
};

export const formReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.FIELD_RESET:
      return userInitial;
    case actionTypes.FIELD_UPDATE:
      return { ...state, [action.field]: action.value };
    case actionTypes.FIELD_NESTED_UPDATE:
      return { ...state, [action.field]: { ...state[action.field], [action.subfield]: action.value } };
    case actionTypes.REGISTER_LOADING:
      return { ...state, loading: true};
    case actionTypes.REGISTER_SUCCESS:
      return { ...state, loading: false};
    case actionTypes.REGISTER_FAILURE:
      return { ...state, loading: false};
    default:
      return state;
  }
};