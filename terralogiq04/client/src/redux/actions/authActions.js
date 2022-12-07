import axios from "axios";
import { API_URL, LOCAL_TOKEN } from "../../constants";

export const login = async (data, dispatch) => {
  try {
    const res = await axios.post(`${API_URL}/auth/login`, data);

    localStorage.setItem(LOCAL_TOKEN, res.data.token);
    dispatch({ type: "LOGIN", payload: res.data.user });
  } catch (error) {
    console.log(error);
  }
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
    console.log(error);
  }
};

export const logout = (dispatch) => {
  localStorage.removeItem(LOCAL_TOKEN);
  dispatch({ type: "LOGOUT" });
};
