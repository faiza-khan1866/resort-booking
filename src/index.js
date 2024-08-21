import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from "./serviceWorker";
import "./assets/css/animate.min.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/flaticon.css";
import "../node_modules/slick-carousel/slick/slick.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./assets/css/default.css";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app
import "./App.scss";
import store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  // <BrowserRouter>
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  // </BrowserRouter>,
  document.getElementById("miranda")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
