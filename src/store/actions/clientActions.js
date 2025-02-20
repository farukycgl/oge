import axiosInstance from "../../api/axios"
import { toast } from "react-toastify"
import md5 from "md5"

export const SET_USER = "SET_USER";
export const SET_ROLES = "SET_ROLES";
export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";
// Action Types
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"

// Action Creators
export const loginSuccess = (userData) => ({
  type: LOGIN_SUCCESS,
  payload: userData,
})

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
})

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
})

export const setRoles = (roles) => ({
  type: SET_ROLES,
  payload: roles,
})

export const setTheme = (theme) => ({
  type: SET_THEME,
  payload: theme,
})

export const setLanguage = (language) => ({
  type: SET_LANGUAGE,
  payload: language,
})

// Thunk action creator to get roles
export const fetchRoles = () => async (dispatch, getState) => {
  const {
    client
  } = getState()
  if (client.roles.length === 0) {
    try {
      // Replace this with your actual API call
      const response = await fetch("/api/roles")
      const roles = await response.json()
      dispatch(setRoles(roles))
    } catch (error) {
      console.error("Failed to fetch roles:", error)
    }
  }
}


// Thunk Action Login için 
export const loginUser =
  (credentials, rememberMe, navigate, from = "/") =>
  async (dispatch) => {
    try {
      const response = await axiosInstance.post("/login", credentials)
      const userData = response.data

      // Add Gravatar URL to user data
      const emailHash = md5(credentials.email.toLowerCase().trim())
      userData.avatarUrl = `https://www.gravatar.com/avatar/${emailHash}?d=identicon`

      // Save token if remember me is checked
      if (rememberMe) {
        localStorage.setItem("token", userData.token)
      }

      dispatch(loginSuccess(userData))
      toast.success("Successfully logged in!")
      navigate(from)
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Login failed. Please try again."
      dispatch(loginFailure(errorMessage))
      toast.error(errorMessage)
    }
  }