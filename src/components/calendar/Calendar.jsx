import React, { useState } from "react";
import CalendarR from 'react-calendar';
import "./calendarStyle.scss"
import smile from "../img/3260867.png"
import regular from "../img/3260877.png"
import sad from "../img/3260860.png"
import save from "../img/5662990.png"
import back from "../img/4682588.png"
import Header from "../header/Header";
import { useDispatch } from "react-redux";
import { daySendAction } from "../../redux/actions/dayActions";


const Calendar = () => {
    const dayinformartion = [];
    const feelingInformation = [];
    const feelingInformationI = [];
    
    const dispatch = useDispatch();
    
    const [show,setShow] = useState(false);
    const [backShow,setBackshow] = useState(true);
    const [sadShow,setSadshow] = useState(true);
    const [regularShow,setRegularshow] = useState(true);
    const [smileShow,setSmileshow] = useState(true);

    const dia = (e) =>{
        const daySelectedOff = e.target.innerHTML;
        const daySelectedOn = e.target.ariaLabel;
        console.log(e.target.ariaLabel);
        console.log(daySelectedOff);
        const listo = daySelectedOff.slice(18,22);
        console.log(listo);
        console.log(daySelectedOff.length);
        // console.log(daySelectedOn.length);
        // console.log(e);
        if (daySelectedOff.length <= 2) {
            console.log(`click adentro ${daySelectedOn}`);
            console.log(daySelectedOn)
            setShow(true);
            console.log(show);
            sessionStorage.setItem('day',JSON.stringify(daySelectedOn));
        }else{
            if (daySelectedOff.length === 45) {
                console.log(`en ${daySelectedOff.slice(18,35)}`);
                setShow(true);
                sessionStorage.setItem('day',JSON.stringify(daySelectedOff.slice(18,35)));
            }else if(daySelectedOff.length === 46){
                if ((daySelectedOff.includes('enero'))===true) {
                    console.log(`en ${daySelectedOff.slice(18,36)}`);
                    setShow(true);
                    sessionStorage.setItem('day',JSON.stringify(daySelectedOff.slice(18,36)));
                }else if ((daySelectedOff.includes('marzo'))===true) {
                    console.log(`en ${daySelectedOff.slice(18,36)}`);
                    setShow(true);
                    sessionStorage.setItem('day',JSON.stringify(daySelectedOff.slice(18,36)));
                }else if ((daySelectedOff.includes('abril'))===true) {
                    console.log(`en ${daySelectedOff.slice(18,36)}`);
                    setShow(true);
                    sessionStorage.setItem('day',JSON.stringify(daySelectedOff.slice(18,36)));
                }else if ((daySelectedOff.includes('junio'))===true) {
                    console.log(`en ${daySelectedOff.slice(18,36)}`);
                    setShow(true);
                    sessionStorage.setItem('day',JSON.stringify(daySelectedOff.slice(18,36)));
                }else if ((daySelectedOff.includes('julio'))===true) {
                    console.log(`en ${daySelectedOff.slice(18,36)}`);
                    setShow(true);
                    sessionStorage.setItem('day',JSON.stringify(daySelectedOff.slice(18,36)));
                }
            }else if(daySelectedOff.length === 47){
                if ((daySelectedOff.includes('mayo'))===true) {
                    console.log(`en ${daySelectedOff.slice(18,36)}`);
                    setShow(true);
                    sessionStorage.setItem('day',JSON.stringify(daySelectedOff.slice(18,36)));
                }else if ((daySelectedOff.includes('agosto'))===true) {
                    console.log(`en ${daySelectedOff.slice(18,37)}`);
                    setShow(true);
                    sessionStorage.setItem('day',JSON.stringify(daySelectedOff.slice(18,37)));
                }
            }else if(daySelectedOff.length === 48){
                if ((daySelectedOff.includes('enero'))===true) {
                    console.log(`en ${daySelectedOff.slice(18,37)}`);
                    setShow(true);
                    sessionStorage.setItem('day',JSON.stringify(daySelectedOff.slice(18,37)));
                }else if ((daySelectedOff.includes('febrero'))===true) {
                    console.log(`en ${daySelectedOff.slice(18,38)}`);
                    setShow(true);
                    sessionStorage.setItem('day',JSON.stringify(daySelectedOff.slice(18,38)));
                }else if ((daySelectedOff.includes('marzo'))===true) {
                    console.log(`en ${daySelectedOff.slice(18,37)}`);
                    setShow(true);
                    sessionStorage.setItem('day',JSON.stringify(daySelectedOff.slice(18,37)));
                }else if ((daySelectedOff.includes('abril'))===true) {
                    console.log(`en ${daySelectedOff.slice(18,37)}`);
                    setShow(true);
                    sessionStorage.setItem('day',JSON.stringify(daySelectedOff.slice(18,37)));
                }else if ((daySelectedOff.includes('junio'))===true) {
                    console.log(`en ${daySelectedOff.slice(18,37)}`);
                    setShow(true);
                    sessionStorage.setItem('day',JSON.stringify(daySelectedOff.slice(18,37)));
                }else if ((daySelectedOff.includes('julio'))===true) {
                    console.log(`en ${daySelectedOff.slice(18,37)}`);
                    setShow(true);
                    sessionStorage.setItem('day',JSON.stringify(daySelectedOff.slice(18,37)));
                }else if ((daySelectedOff.includes('octubre'))===true) {
                    console.log(`en ${daySelectedOff.slice(18,38)}`);
                    setShow(true);
                    sessionStorage.setItem('day',JSON.stringify(daySelectedOff.slice(18,38)));
                }
                
            }else if(daySelectedOff.length === 49){
                console.log(`en ${daySelectedOff.slice(18,38)}`);
                setShow(true);
                sessionStorage.setItem('day',JSON.stringify(daySelectedOff.slice(18,38)));
            }else if(daySelectedOff.length === 50){
                if ((daySelectedOff.includes('febrero'))===true) {
                    console.log(`en ${daySelectedOff.slice(18,39)}`);
                    setShow(true);
                    sessionStorage.setItem('day',JSON.stringify(daySelectedOff.slice(18,39)));
                }else if ((daySelectedOff.includes('octubre'))===true) {
                    console.log(`en ${daySelectedOff.slice(18,39)}`);
                    setShow(true);
                    sessionStorage.setItem('day',JSON.stringify(daySelectedOff.slice(18,39)));
                }else if ((daySelectedOff.includes('noviembre'))===true) {
                    console.log(`en ${daySelectedOff.slice(18,40)}`);
                    setShow(true);
                    sessionStorage.setItem('day',JSON.stringify(daySelectedOff.slice(18,40)));
                }else if ((daySelectedOff.includes('diciembre'))===true) {
                    console.log(`en ${daySelectedOff.slice(18,40)}`);
                    setShow(true);
                    sessionStorage.setItem('day',JSON.stringify(daySelectedOff.slice(18,40)));
                }
            }else if(daySelectedOff.length === 51){
                console.log(`en ${daySelectedOff.slice(18,41)}`);
                setShow(true);
                sessionStorage.setItem('day',JSON.stringify(daySelectedOff.slice(18,41)));
            }else if(daySelectedOff.length === 52){
                if ((daySelectedOff.includes('noviembre'))===true) {
                    console.log(`en ${daySelectedOff.slice(18,41)}`);
                    setShow(true);
                     sessionStorage.setItem('day',JSON.stringify(daySelectedOff.slice(18,41)));
                }else if ((daySelectedOff.includes('diciembre'))===true) {
                    console.log(`en ${daySelectedOff.slice(18,41)}`);
                    setShow(true);
                    sessionStorage.setItem('day',JSON.stringify(daySelectedOff.slice(18,41)));
                }
            }else if(daySelectedOff.length === 53){
                console.log(`en ${daySelectedOff.slice(18,42)}`);
                setShow(true);
                sessionStorage.setItem('day',JSON.stringify(daySelectedOff.slice(18,42)));
            }else{
                setShow(false);
                setSadshow(true);
                setRegularshow(true);
                setSmileshow(true);
                setBackshow(true);
            }
        }
    }
   
    const dayStorage = JSON.parse(sessionStorage.getItem('day'));
    
    console.log(dayStorage);
    
    function convertirFecha(fecha) {
        // Separamos la fecha por los espacios en blanco
        const partesFecha = fecha.split(' ');
      
        // Obtenemos el mes en formato numérico
        const meses = {
          'enero': '01',
          'febrero': '02',
          'marzo': '03',
          'abril': '04',
          'mayo': '05',
          'junio': '06',
          'julio': '07',
          'agosto': '08',
          'septiembre': '09',
          'octubre': '10',
          'noviembre': '11',
          'diciembre': '12'
        };
        const mes = meses[partesFecha[2].toLowerCase()];
      
        // Obtenemos el día y el año
        const dia = partesFecha[0];
        const anio = partesFecha[4];
      
        // Concatenamos los elementos en el formato deseado
        const fechaFormateada = `${anio}-${mes}-${dia}`;
      
        // Devolvemos la fecha formateada
        return fechaFormateada;
      }

    const daysSaved = () =>{
        //funcion que guarda la informacion del dia en el que se esta
        const prueba2 = JSON.parse(sessionStorage.getItem('day'));
        dayinformartion.unshift(prueba2);
        console.log(dayinformartion);
        const pruebadia = new Date(`'${dayinformartion[0]}'`);
        // const pruebadia1 =pruebadia.getDay();
        console.log(pruebadia);
        console.log(dayinformartion[0]);
        console.log(`'${dayinformartion[0]}'`)
        //_________________________________________
        //SELECION DE LA EMOCION SELEECIONADA
        const feelingSession = JSON.parse(sessionStorage.getItem('feeling'));
        feelingInformation.unshift(feelingSession);
        console.log(feelingInformation);
        console.log(feelingInformation[0]);
        //___________________________________
//________________________________________________________________________
        //SELECION DE LA EMOCION SELEECIONADA IMG
        const feelingSessionI = JSON.parse(sessionStorage.getItem('feelingImg'));
        feelingInformationI.unshift(feelingSessionI);
        console.log(feelingInformationI);
        console.log(feelingInformationI[0]);
//__________________________________________________________
        const fecha = `${dayinformartion[0]}`;
        const fechaFormateada = convertirFecha(fecha);
        //ESTE ES EL FORMATO CON ELÑ QUE SE PUEDE TRABAJAR LA FECHA---------IMPORTANTE
        console.log(fechaFormateada); // "2011-07-12"
        //__________________________________
        //aqui empieza mi prueba con al funcion nueva
        const pruebadiaHecha = new Date(`"${fechaFormateada}"`);
        console.log(pruebadiaHecha)
        const pruebadia1 =pruebadiaHecha.getDay();

        const hbdiu = new Date("2023-03-8");
        const hfufh = hbdiu.getDay();
        console.log(hfufh);

        const hbdiu1 = new Date("2023-03-15");
        const hfufh1 = hbdiu.getDay();
        console.log(hfufh1);


        //resultado del día que cae la fecha seleccionada----------------IMPORTANTE
        console.log(pruebadia1);
        //construccion del objeto ---------------------------
        // const dataFeeling ={
        //     fecha:fechaFormateada,
        //     diaDeLaSemana:pruebadia1,
        //     feeling:feelingInformation[0]
        // }
        // console.log(dataFeeling);
        //al final se uso dentro de los ifs
        //Fin de la construccion del objeto
        //______________________________________________
        //________________________convertir el dia de la semana
        if (pruebadia1===1) {
            const dataFeeling ={
                fecha:fechaFormateada,
                diaDeLaSemana:'lunes',
                feeling:feelingInformation[0],
                feelingI:feelingInformationI[0]
            }
            dispatch(daySendAction(dataFeeling));
        } else if(pruebadia1===2) {
            const dataFeeling ={
                fecha:fechaFormateada,
                diaDeLaSemana:'martes',
                feeling:feelingInformation[0],
                feelingI:feelingInformationI[0]
            }
            dispatch(daySendAction(dataFeeling));
        }else if(pruebadia1===3) {
            const dataFeeling ={
                fecha:fechaFormateada,
                diaDeLaSemana:'miercoles',
                feeling:feelingInformation[0],
                feelingI:feelingInformationI[0]
            }
            dispatch(daySendAction(dataFeeling));
        }else if(pruebadia1===4) {
            const dataFeeling ={
                fecha:fechaFormateada,
                diaDeLaSemana:'jueves',
                feeling:feelingInformation[0],
                feelingI:feelingInformationI[0]
            }
            dispatch(daySendAction(dataFeeling));
        }else if(pruebadia1===5) {
            const dataFeeling ={
                fecha:fechaFormateada,
                diaDeLaSemana:'viernes',
                feeling:feelingInformation[0],
                feelingI:feelingInformationI[0]
            }
            dispatch(daySendAction(dataFeeling));
        }else if(pruebadia1===6) {
            const dataFeeling ={
                fecha:fechaFormateada,
                diaDeLaSemana:'sabado',
                feeling:feelingInformation[0],
                feelingI:feelingInformationI[0]
            }
            dispatch(daySendAction(dataFeeling));
        }else if(pruebadia1===0) {
            const dataFeeling ={
                fecha:fechaFormateada,
                diaDeLaSemana:'domingo',
                feeling:feelingInformation[0],
                feelingI:feelingInformationI[0]
            }
            dispatch(daySendAction(dataFeeling));
        }
        //_______________________________________________----------------importante
        
        //enviar objeto con redux-----------------------
        // dispatch(daySendAction(dataFeeling)); || esta fue la manera de enviarlop pero al final se envio en casa if
    }
    const backFuntion = () =>{
        setShow(false);
        setSadshow(true);
        setRegularshow(true);
        setSmileshow(true);
        setBackshow(true);
    }

    return(
        <div className="contentAllCalendar">
            <Header />
            <div className="contentCalendar" onClick={(e)=>dia(e)}>
                <CalendarR />
                
            </div>
            <div>{show ? ( <div className="feelings">
                <div className="contentWord" onClick={()=>backFuntion()}><p className="back"><img src={back} alt="" className="backImg"/></p><p className="dayToSave">{dayStorage}</p></div>
            <div className="contentFeelings">
                <div>{sadShow ? <img src={sad} alt="" className="sad" onClick={()=>(setSadshow(!sadShow),setRegularshow(true),setSmileshow(true),sessionStorage.setItem('feelingImg',JSON.stringify(sad)),sessionStorage.setItem('feeling',JSON.stringify('sad')))}/>:<img src={sad} alt="" className="sadOn" onClick={()=>(setSadshow(!sadShow),setRegularshow(true),setSmileshow(true))}/>}</div>
                <div>{regularShow ? <img src={regular} alt="" className="regular" onClick={()=>(setRegularshow(!regularShow),setSadshow(true),setSmileshow(true),sessionStorage.setItem('feelingImg',JSON.stringify(regular)),sessionStorage.setItem('feeling',JSON.stringify('regular')))}/>:<img src={regular} alt="" className="regularOn" onClick={()=>(setRegularshow(!regularShow),setSadshow(true),setSmileshow(true))}/>}</div>
                <div>{smileShow ? <img src={smile} alt="" className="smile" onClick={()=>(setSmileshow(!smileShow),setSadshow(true),setRegularshow(true),sessionStorage.setItem('feelingImg',JSON.stringify(smile)),sessionStorage.setItem('feeling',JSON.stringify('smile')))}/>:<img src={smile} alt="" className="smileOn" onClick={()=>(setSmileshow(!smileShow),setSadshow(true),setRegularshow(true))}/>}</div>

                {/* <div>{smileShow ? <div>{smileShow ? <img src={smile} alt="" className="smile" onClick={()=>(setSmileshow(!smileShow),setSadshow(true),setRegularshow(true))}/>:<img src={smile} alt="" className="smileOn" onClick={()=>(setSmileshow(!smileShow),setSadshow(true),setRegularshow(true))}/>}</div> : <div>{smileShow ? <img src={smile} alt="" className="smile" onClick={()=>(setSmileshow(!smileShow),setSadshow(true),setRegularshow(true))}/>:<img src={smile} alt="" className="smileOn" onClick={()=>(setSmileshow(!smileShow),setSadshow(true),setRegularshow(true))}/>} <div >{backShow ? <img src={save} alt="" className="save" onClick={()=>(daysSaved(),setBackshow(!backShow))} /> : <img src={save} alt="" className="saveOn" onClick={()=>(daysSaved(),setBackshow(!backShow))} />}</div></div>  }</div> */}

                {/* <div>{regularShow ? <img src={regular} alt="" className="regular" onClick={()=>(setRegularshow(!regularShow),setSadshow(true),setSmileshow(true))}/>:<div><img src={regular} alt="" className="regularOn" onClick={()=>(setRegularshow(!regularShow),setSadshow(true),setSmileshow(true))}/> <img src={smile} alt="" className="smile" onClick={()=>(setSmileshow(!smileShow),setSadshow(true),setRegularshow(true))}/><div>{backShow ? <img src={save} alt="" className="save" onClick={()=>(daysSaved(),setBackshow(!backShow))} /> : <img src={save} alt="" className="saveOn" onClick={()=>(daysSaved(),setBackshow(!backShow))} />}</div></div>}</div> */}

                {/* <div>{smileShow ? <img src={smile} alt="" className="smile" onClick={()=>(setSmileshow(!smileShow),setSadshow(true),setRegularshow(true))}/>:<div> <img src={smile} alt="" className="smileOn" onClick={()=>(setSmileshow(!smileShow),setSadshow(true),setRegularshow(true))}/> <div >{backShow ? <img src={save} alt="" className="save" onClick={()=>(daysSaved(),setBackshow(!backShow))} /> : <img src={save} alt="" className="saveOn" onClick={()=>(daysSaved(),setBackshow(!backShow))} />}</div></div>}</div> */}

                <div >{backShow ? <img src={save} alt="" className="save" onClick={()=>(daysSaved(),setBackshow(!backShow))} /> : <img src={save} alt="" className="saveOn" onClick={()=>(daysSaved(),setBackshow(!backShow))} />}</div>

            </div></div>) : ""}</div>
        </div>  
    )
}

export default Calendar;