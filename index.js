import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Component/Login'
//import NewLogin from './Component/NewLogin';
import Test from './Component/Test';
 import Header from './Component/Header';
export default function Apps() {
  return (
    <BrowserRouter>
       <App />
      <Routes>
     
        {/* <Header /> */}
        <Route path="/" element={<Test />}>
          <Route path="login" element={<Login />} /> 
          {/* <Route path='newlogin' element={<NewLogin />}/> */}
         
         </Route>
      </Routes>
    </BrowserRouter>
  );
}
ReactDOM.render(<Apps />, document.getElementById("root"));