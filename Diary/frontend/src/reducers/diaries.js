import { GET_DIARIES, DELETE_DIARY, GET_DIARY, EDIT_DIARY } from "../actions/types";

const initialState = {
  diaries: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_DIARIES:
      return {
        ...state,
        diaries: action.payload,
      };
    case DELETE_DIARY:
      return {
        ...state,
        diaries: state.diaries.filter((diary) => diary.id !== action.payload),
      };
    case GET_DIARY:
    case EDIT_DIARY:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    default:
      return state;
  }
}
