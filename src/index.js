import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
// <<<<<<< HEAD

import "bootstrap/dist/css/bootstrap.min.css";



import "bootstrap-icons/font/bootstrap-icons.css";

// =======
import 'bootstrap/dist/css/bootstrap.min.css';

// import './index.css';


// >>>>>>> 777c2dec436d0344c0613d750b9ce75a7815ad30
import './index.css';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals