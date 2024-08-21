import { ActionTypes } from "../constants/action-types";
const intialState = {
    premiuimoffers: [],
};

export const premuiumOffersReducer = (state = intialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PREMIUIM_OFFERS:
            return { ...state, premiuimoffers: payload };
        case ActionTypes.FETCH_PREMIUIM_OFFERS:
            return { ...state, premiuimoffers: payload };
        default:
            return state;
    }
};

