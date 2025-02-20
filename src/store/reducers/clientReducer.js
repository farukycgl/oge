import {
  SET_USER,
  SET_ROLES,
  SET_THEME,
  SET_LANGUAGE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from "../actions/clientActions"

const initialState = {
  user: {},
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
      return {
        ...state, user: action.payload, error: null
      }
    case LOGIN_FAILURE:
      return {
        ...state, user: null, error: action.payload
      }
    default:
      return state
  }
}

export default clientReducer;