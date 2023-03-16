import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../../../src/Login.jsx";
import Register from "../../../src/Register.jsx";
import Calendar from "../calendar/Calendar.jsx";
import { auth } from "../../firebase/firebaseConfig";
import DashBoardRouter from "./DashBoardRouter";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";
import Spinner from "react-bootstrap/Spinner";
import Header from "../header/Header.jsx";
import Home from"../home/Home.jsx";
import Statistics from "../statistics/Statistics.jsx";

const Router = () =>{
    const [isLoggedIn, setIsLoggedIn] = useState(undefined);
    const [check, setCheck] = useState(true);
  
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user?.uid) {
          setIsLoggedIn(true);
          
        } else {
          setIsLoggedIn(false);
        }
        setCheck(false)
      }
      );
    }, [setIsLoggedIn]);
  
    if (check) {
      return (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      );
    }
    return(
        <BrowserRouter>
        {/* <Header /> */}
            <Routes>
            <Route element={<PublicRouter isAuthentication={isLoggedIn} />}>
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<Login />} />
            </Route>
            <Route element={<PrivateRouter isAuthentication={isLoggedIn} />}>
                <Route path="/*" element={<DashBoardRouter />} />
                <Route path='calendar' element={<Calendar />} />
                <Route path='statistics' element={<Statistics />} />
            </Route>
            {/* dento del private route seran las rutas que se permitiran solo cuando este logeado */}
                {/* <Route path='/' element={<Home />}/>
                <Route path='calendar' element={<Calendar />} />
                <Route path='statistics' element={<Statistics />} /> */}
                {/* //en la pagina de reactrouterdom el path de pone solo el nombre y no /  */}
            </Routes>
        </BrowserRouter>
    )
}

export default Router;