import { combineReducers } from "redux";
import { pagesReducer } from "./pagesReducer";
import { premuiumOffersReducer } from "./premiuimOffersReducer";
import { sectionsReducer } from "./sectionsReducer";


const reducers = combineReducers({
  allPages: pagesReducer,
  allPremiuimOffers: premuiumOffersReducer,
  allSections: sectionsReducer
});
export default reducers;
