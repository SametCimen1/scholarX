import React from 'react';
import './index.css'
// import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';

import { render } from "react-dom";
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './Home';
import Search from './Search'


render(
  <BrowserRouter>
  <Routes>

      <Route path = "/" element={<Home />} />
      <Route path="/search" element={<Search />}></Route>
      

  </Routes>
</BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
