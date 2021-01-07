import axios from "axios";
import { returnError } from "./messages";
import { stopSubmit } from "redux-form";

import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from "../actions/types";

export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });
  const token = getState().auth.token;

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }
  axios
    .get("/api/auth/user", config)
    .then((response) => {
      dispatch({
        type: USER_LOADED,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch(returnError(error.response.data, error.response.status));
      dispatch({
        type: AUTH_ERROR,
      });
    });
};

export const login = ({ username, password }) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ username, password });

  axios
    .post("/api/auth/login", body, config)
    .then((response) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({ type: LOGIN_FAIL });
      dispatch(returnError(error.response.data, error.response.status));
      dispatch(stopSubmit("loginForm", error.response.data)); // stopSubmit() method is used to pass server-side errors to our Redux Form
    });
};
export const logout = () => (dispatch, getState) => {
  axios
    .post("/api/auth/logout/", null, tokenConfig(getState))
    .then((response) => {
      dispatch({
        type: LOGOUT_SUCCESS,
      });
    })
    .catch((error) => {
      dispatch(returnError(error.response.data, error.response.status));
    });
};

export const register = ({ username, email, password }) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ username, email, password });
  axios
    .post("/api/auth/register", body, config)
    .then((response) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({ type: REGISTER_FAIL });
      dispatch(returnError(error.response.data, error.response.status));
    });
};

//we can use this function as our helper function that gets and sets tokens.
export const tokenConfig = (getState) => {
  const token = getState().auth.token;

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }
  return config;
};
