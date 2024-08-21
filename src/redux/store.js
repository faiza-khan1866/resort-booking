import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// import {
//   persistStore,
//   persistReducer,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";

import reducers from "./reducers/index";

// const persistConfig = {
//   key: "miranda",
//   storage,
// };

// const persistedReducer = persistReducer(
//   persistConfig,
//   reducers
// );

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export const store = createStore(
//   persistedReducer,
//   composeEnhancers(applyMiddleware(thunk))
// );

// export const persistor = persistStore(store);
