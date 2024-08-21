import API from "../../langapi/http"
import { ActionTypes } from "../constants/action-types";

export const fetchPages = (activeLang) => async (dispatch) => {
  const response = await API.get(`/get_pages?lang=${activeLang}`);
  dispatch({ type: ActionTypes.FETCH_PAGES, payload: response.data.data });
};

export const setPages = (pages) => {
  return {
    type: ActionTypes.SET_PAGES,
    payload: pages,
  };
};
