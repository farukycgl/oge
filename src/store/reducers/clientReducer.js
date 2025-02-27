import {
  SET_USER,
  SET_ROLES,
  SET_THEME,
  SET_LANGUAGE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from "../actions/clientActions"

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  addressList: [],
  creditCards: [],
  roles: [],
  theme: "",
  language: "",
  error: null
}

const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state, user: action.payload
      }
    case SET_ROLES:
      return {
        ...state, roles: action.payload
      }
    case SET_THEME:
      return {
        ...state, theme: action.payload
      }
    case SET_LANGUAGE:
      return {
        ...state, language: action.payload
      }
    case LOGIN_SUCCESS:
      localStorage.setItem('user', JSON.stringify(action.payload));
      return {
        ...state, user: action.payload, error: null
      }
    case LOGIN_FAILURE:
      return {
        ...state, user: null, error: action.payload
      }
    case LOGOUT:
      localStorage.removeItem('user');
      return {
        ...state, user: null, error: null
      }  
    default:
      return state
  }
}

export default clientReducer;