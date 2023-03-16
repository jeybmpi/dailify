import React from 'react'
import Home from '../../components/home/Home'
import { Route, Routes } from "react-router-dom";
// import Calendar from '../calendar/Calendar';
// import Statistics from '../statistics/Statistics';



const DashBoardRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='calendar' element={<Calendar />} />
        <Route path='statistics' element={<Statistics />} /> */}
    </Routes>
  )
}

export default DashBoardRouter