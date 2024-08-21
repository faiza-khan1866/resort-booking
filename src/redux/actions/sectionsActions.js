import API from "../../langapi/http"
import { ActionTypes } from "../constants/action-types";

export const fetchSections = (pageId, activeLang) => async (dispatch) => {
    const response = await API.get(`/all-sections/${pageId}/${activeLang}`);
    dispatch({ type: ActionTypes.FETCH_SECTIONS, payload: response?.data?.data[0] });
};

export const setSections = (sections) => {
    return {
        type: ActionTypes.SET_SECTIONS,
        payload: sections,
    };
};

export const removeSelectedSection = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_SECTION,
    };
};