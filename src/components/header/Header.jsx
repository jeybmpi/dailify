import React from "react";
import { useNavigate } from "react-router-dom";
import "./headerStyle.scss";

const Header = () =>{
    const navigate = useNavigate();
    const changePageHome = () =>{
        navigate(`/`);
    }
    const changePagecalendar = () => {
        navigate(`/calendar`);
    }
    const changePagestatistics = () => {
        navigate(`/statistics`);
    }
    return(
        <div className="contentHeader">
            {/* <div onClick={()=>changePageHome()} className="contentHeader-home">HOME</div> */}
            <div className="contentHeader-calendar" onClick={()=>changePagecalendar()}>Calendario</div>
            <div className="contentHeader-statistics" onClick={()=>changePagestatistics()}>Statistics</div>
        </div>
    )
}
export default Header;