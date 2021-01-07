import axios from "axios";
import {
  GET_DIARIES,
  DELETE_DIARY,
  ADD_DIARY,
  GET_ERRORS,
  GET_DIARY,
  EDIT_DIARY,
} from "./types";
import { createMessage, returnError } from "./messages";
import history from "../components/commom/history";
import { tokenConfig } from "./auth";

export const getDiaries = () => (dispatch, getState) => {
  axios
    .get("/api/diaries/", tokenConfig(getState))
    .then((response) => {
      dispatch({ type: GET_DIARIES, payload: response.data });
    })
    .catch((error) => returnError(error.response.data, error.response.status));
};

export const deleteDiary = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/diaries/${id}/`, tokenConfig(getState))
    .then((response) => {
      dispatch({ type: DELETE_DIARY, payload: id });
      dispatch(createMessage({ diaryDeleted: "Diary deleted" }));
    })
    .catch((error) => returnError(error.response.data, error.response.status));
};

export const addDiary = ({ title, body }) => (dispatch, getState) => {
  const bod = JSON.stringify({ title, body });
  axios
    .post("/api/diaries/", bod, tokenConfig(getState))
    .then((response) => {
      dispatch({ type: ADD_DIARY, payload: response.data });
      dispatch(createMessage({ diaryAdded: "Diary Added" }));
    })
    .catch((error) => {
      const errors = {
        message: error.response.data,
        status: error.response.status,
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors,
      });
    });
};

export const editDiary = (id, formValues) => (dispatch, getState) => {
  axios
    .patch(`/api/diaries/${id}/`, formValues, tokenConfig(getState))
    .then((response) => {
      dispatch({
        type: EDIT_DIARY,
        payload: response.data,
      });
      dispatch(createMessage({ diaryEdited: "Diary edited" }));

      setInterval(() => {
        history.push("/");
      }, 1000); //after editing the diary the user will be redirected to Home after 1s
    })
    .catch((error) => {
      returnError(error.response.status);
    });
};

export const getDiary = (id) => (dispatch, getState) => {
  axios
    .get(`/api/diaries/${id}/`, tokenConfig(getState))
    .then((response) => {
      dispatch({
        type: GET_DIARY,
        payload: response.data,
      });
    })
    .catch((error) => {
      returnError(error.response.data, error.response.status);
    });
};
