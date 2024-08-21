import API from "../../langapi/http"
import { ActionTypes } from "../constants/action-types";

export const fetchPremiuimOffers = (activeLang) => async (dispatch) => {
    const response = await API.get(`/get_premium_offers?lang=${activeLang}`);
    dispatch({ type: ActionTypes.FETCH_PREMIUIM_OFFERS, payload: response.data.data });
};

export const setPremuiumOffers = (sections) => {
    return {
        type: ActionTypes.SET_PREMIUIM_OFFERS,
        payload: sections,
    };
};
