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
  FORM_LOADING: 'FORM_LOADING',
  FORM_SUCCESS: 'FORM_SUCCESS',
  FORM_FAILURE: 'FORM_FAILURE',
};

export const formReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.FIELD_RESET:
      return userInitial;
    case actionTypes.FIELD_UPDATE:
      return { ...state, [action.field]: action.value };
    case actionTypes.FIELD_NESTED_UPDATE:
      return { ...state, [action.field]: { ...state[action.field], [action.subfield]: action.value } };
    case actionTypes.FORM_LOADING:
      return { ...state, loading: true};
    case actionTypes.FORM_SUCCESS:
      return { ...state, loading: false};
    case actionTypes.FORM_FAILURE:
      return { ...state, loading: false};
    default:
      return state;
  }
};