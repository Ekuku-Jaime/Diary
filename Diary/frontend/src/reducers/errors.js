import React from 'react';
import { GET_ERRORS } from "../actions/types";

const initialState = {
  message: {},
  status: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        message: action.payload,
        status: action.payload.status,
      };
    default:
      return state;
  }
}
