import { ActionTypes } from "../constants/action-types";
const intialState = {
    sections: [],
};

export const sectionsReducer = (state = intialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_SECTIONS:
            return { ...state, sections: payload };
        case ActionTypes.FETCH_SECTIONS:
            return { ...state, sections: payload };
        case ActionTypes.REMOVE_SELECTED_SECTION:
            return {};
        default:
            return state;
    }
};

