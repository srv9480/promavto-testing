import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import './index.css';
import store from "./redux/store";
import Page from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="container">
        <Page />
      </div>
    </Provider>
  </React.StrictMode>
);

