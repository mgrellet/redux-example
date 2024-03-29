import React from 'react';
import ReactDOM from 'react-dom/client';
import MyRouter from "./MyRouter";
import {Provider} from "react-redux";
import store from "./store/store";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <MyRouter />
      </Provider>
  </React.StrictMode>
);

