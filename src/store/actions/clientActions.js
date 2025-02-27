import axiosInstance from "../../api/axios"
import { toast } from "react-toastify"
import md5 from "md5"

export const SET_USER = "SET_USER";
export const SET_ROLES = "SET_ROLES";
export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";
// Login Actions
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"
// Logout Actions
export const LOGOUT = "LOGOUT";

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

// Thunk Action - Roles için
export const fetchRoles = () => async (dispatch, getState) => {
  const {
    client
  } = getState()
  if (client.roles.length === 0) {
    try {
      const response = await axiosInstance.get("/roles")
      dispatch(setRoles(response.data))
    } catch (error) {
      console.error("Failed to fetch roles:", error)
    }
  }
}


// Thunk Action - Login için 
export const loginUser =
  (credentials, rememberMe, history, from = "/") =>
  async (dispatch) => {
    try {
      console.log("Giriş yapılıyor...");
      const response = await axiosInstance.post("/login", credentials);

      const userData = response.data;

      // Add Gravatar URL to user data
      const emailHash = md5(credentials.email.toLowerCase().trim());
      userData.avatarUrl = `https://www.gravatar.com/avatar/${emailHash}?d=identicon`;

      // Save token if remember me is checked
      if (rememberMe) {
        localStorage.setItem("token", userData.token);
      }

      console.log("Dispatching loginSuccess with userData:", userData);
      dispatch(loginSuccess(userData));
      
      toast.success("Giriş başarılı :)");
      history.push(from);
      localStorage.setItem('user', JSON.stringify(userData));
    } catch (error) {
      console.error("Login error:", error);
      const errorMessage = error.response?.data?.message || "Login failed. Please try again.";
      console.log("Dispatching loginFailure with error:", errorMessage);
      dispatch(loginFailure(errorMessage));
      toast.error(errorMessage);
    }
  };

// Thunk Action - Logout için
export const logoutUser = () => {
  return (dispatch) => {
    localStorage.removeItem('user');
    dispatch({ type: 'LOGOUT' });
    toast.success("Çıkış yapıldı !");
  };
};