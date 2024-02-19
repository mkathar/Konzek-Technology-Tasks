import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { BrowserRouter as Router } from "react-router-dom";
import store from "./redux/store";
import App from "./App";
import "./assets/scss/main.css";
// Dil kodunu belirleme işlemi, kullanıcının tercihine veya başka bir kaynağa göre yapılabilir.
// Örneğin, tarayıcı dil ayarlarına veya kullanıcının tercihlerine göre.
const userLocale = "en"; // Kullanıcının tercih ettiği dil

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
