import axios from "axios";
import { API_URL, LOCAL_TOKEN } from "../../constants";

export const login = (data, dispatch) => {
  dispatch({ type: "LOADING" });
  setTimeout(async () => {
    try {
      const res = await axios.post(`${API_URL}/auth/login`, data);

      localStorage.setItem(LOCAL_TOKEN, res.data.token);
      dispatch({ type: "LOGIN", payload: res.data.user });
    } catch (error) {
      if (error?.response?.status === 401) {
        return dispatch({ type: "ERROR", payload: error?.response?.data });
      }
      dispatch({ type: "ERROR", payload: error.message });
    }
  }, 1500);
};

export const keepLogin = async (token, dispatch) => {
  try {
    const res = await axios.post(
      `${API_URL}/auth/keep-login`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );

    localStorage.setItem(LOCAL_TOKEN, res.data.token);
    dispatch({ type: "LOGIN", payload: res.data.user });
  } catch (error) {
    localStorage.removeItem(LOCAL_TOKEN);
    dispatch({ type: "LOGOUT" });
  }
};

export const logout = (dispatch) => {
  localStorage.removeItem(LOCAL_TOKEN);
  dispatch({ type: "LOGOUT" });
};
