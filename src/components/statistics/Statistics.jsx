import React, { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../header/Header";
import "./statisticsStyle.scss";
import back from "../img/4682588.png"

const Statistics = () =>{
    const daysend  = useSelector(store => store.daysend);
    //const {daysend}  = useSelector(store => store.daysend); | este no funciono porque el "{daysend} seria una desustructuracion de day sen pero como no hay nada en el objeto qe se llame daysend entonces por eso daba error"
    console.log(Object.values(daysend));
    const objectToArray = Object.values(daysend);
    console.log(objectToArray[0].fecha);
    // const {fecha}  = useSelector(store => store.daysend);
    // console.log(fecha);
    //__________________________________________________
    const [showOptions,setShowoptions] = useState(true);
    const [showStats,setShowstats] = useState(true);
    const [showResum,setShowresum] = useState(true);

    //________________________________________________________procesamiento de datos
    const pruebilla = [];
    const options = () =>{
        //_____________filtrado de smile
        const pruebaFiltrado = objectToArray.filter(feeling=>feeling.feeling =="smile");
        // pruebilla.push(pruebaFiltrado);
        console.log(pruebaFiltrado);
    //______________________
    //filtrado de dias de smile
    const filtradoDiasL = pruebaFiltrado.filter(day=>day.diaDeLaSemana=="lunes");
    const filtradoDiasM = pruebaFiltrado.filter(day=>day.diaDeLaSemana=="martes");
    const filtradoDiasMi = pruebaFiltrado.filter(day=>day.diaDeLaSemana=="miercoles");
    const filtradoDiasj = pruebaFiltrado.filter(day=>day.diaDeLaSemana=="jueves");
    const filtradoDiasV = pruebaFiltrado.filter(day=>day.diaDeLaSemana=="viernes");
    const filtradoDiasS = pruebaFiltrado.filter(day=>day.diaDeLaSemana=="sabado");
    const filtradoDiasD = pruebaFiltrado.filter(day=>day.diaDeLaSemana=="domingo");

    console.log(filtradoDiasL);
    console.log(filtradoDiasM.length);
    console.log(filtradoDiasMi.length);
    console.log(filtradoDiasj.length);
    console.log(filtradoDiasV.length);
    console.log(filtradoDiasS.length);
    console.log(filtradoDiasD.length);

        
    if (filtradoDiasL.length > filtradoDiasM.length && filtradoDiasL.length > filtradoDiasMi.length &&filtradoDiasL.length > filtradoDiasj.length &&filtradoDiasL.length > filtradoDiasV.length &&filtradoDiasL.length > filtradoDiasS.length &&filtradoDiasL.length > filtradoDiasD.length) {
        pruebilla.unshift("lunes");
    } else if(filtradoDiasM.length > filtradoDiasL.length &&filtradoDiasM.length > filtradoDiasMi.length &&filtradoDiasM.length > filtradoDiasj.length &&filtradoDiasM.length > filtradoDiasV.length &&filtradoDiasM.length > filtradoDiasS.length &&filtradoDiasM.length > filtradoDiasD.length) {
        pruebilla.unshift("martes");
    }else if(filtradoDiasMi.length > filtradoDiasL.length &&filtradoDiasMi.length > filtradoDiasM.length &&filtradoDiasMi.length > filtradoDiasj.length &&filtradoDiasMi.length > filtradoDiasV.length &&filtradoDiasMi.length > filtradoDiasS.length &&filtradoDiasMi.length > filtradoDiasD.length) {
        pruebilla.unshift("miercoles");
    }else if(filtradoDiasj.length > filtradoDiasM.length &&filtradoDiasj.length > filtradoDiasMi.length &&filtradoDiasj.length > filtradoDiasL.length &&filtradoDiasj.length > filtradoDiasV.length &&filtradoDiasj.length > filtradoDiasS.length &&filtradoDiasj.length > filtradoDiasD.length) {
        pruebilla.unshift("jueves");
    }else if(filtradoDiasV.length > filtradoDiasM.length &&filtradoDiasV.length > filtradoDiasMi.length &&filtradoDiasV.length > filtradoDiasj.length &&filtradoDiasV.length > filtradoDiasL.length &&filtradoDiasV.length > filtradoDiasS.length &&filtradoDiasV.length > filtradoDiasD.length) {
        pruebilla.unshift("viernes");
    }else if(filtradoDiasS.length > filtradoDiasM.length &&filtradoDiasS.length > filtradoDiasMi.length &&filtradoDiasS.length > filtradoDiasj.length &&filtradoDiasS.length > filtradoDiasV.length &&filtradoDiasS.length > filtradoDiasL.length &&filtradoDiasS.length > filtradoDiasD.length) {
        pruebilla.unshift("sabado");
    }else if(filtradoDiasD.length > filtradoDiasM.length &&filtradoDiasD.length > filtradoDiasMi.length &&filtradoDiasD.length > filtradoDiasj.length &&filtradoDiasD.length > filtradoDiasV.length &&filtradoDiasD.length > filtradoDiasS.length &&filtradoDiasD.length > filtradoDiasL.length) {
        pruebilla.unshift("domingo");
    }else{
        console.log('ninguna de las condiciones se han cumplido')
    }


//_______________________try
// if (filtradoDiasV.length > filtradoDiasL.length) {
//     console.log("viernes es mayor a martes")
// } else {
    
// }
// //___________________________end try

    }


    options();
    console.log(pruebilla);
    //fin del procesamiento der datos_________________________________________
return(
    <>
        <Header />
        <div className="contentStats">
            <div>{showOptions ?<div className="contentStats_stats" onClick={()=>(setShowoptions(false),setShowstats(false),setShowresum(true))}>Estadisticas interesantes</div>:(showStats ? "" : <div className="contentDaystats"><div className="backButton1" onClick={()=>(setShowoptions(true),setShowstats(!showStats),setShowresum(true))}><img src={back} className="backImgResum1"/></div><div className="contentDaySmile" onClick={()=>(setShowoptions(true),setShowstats(!showStats),setShowresum(true))}><p className="wordDaySstats">{`Los ${pruebilla[0]} son tus días mas felices estadisticamente`}</p></div></div>)}</div>

            {/* <div>{showOptions ?<div className="contentStats_stats" onClick={()=>(setShowoptions(false),setShowstats(false),setShowresum(true))}>Estadisticas interesantes</div>:(showStats ? "" : <div><div className="backButton" onClick={()=>(setShowoptions(true),setShowstats(!showStats),setShowresum(true))}><img src={back} className="backImgResum"/></div>{(objectToArray.map((element,index)=>{
                return(
                    <div key={index} className="contentResum">
                       <div className="contentResum_int">
                            <p className="contentResum_int_date">{element.fecha}</p>
                                <p className="contentResum_int_day">{element.diaDeLaSemana}</p>
                                <div className="contentResum_int_img"><img src={element.feelingI} className="contentResum_int_img_I"/></div>
                       </div>
                        
                    </div>
                )
            }))}</div>)}</div> */}

            {/* <div onClick={()=>(setShowoptions(true),setShowstats(!showStats),setShowresum(true))}>Estadisticas interesnates mostradas</div>)}</div> */}
            
            <div>{showOptions ?<div className="contentStats_resum" onClick={()=>(setShowoptions(false),setShowstats(true),setShowresum(false))}>Resumen</div>:(showResum ? "" : <div><div className="backButton" onClick={()=>(setShowoptions(true),setShowstats(false),setShowresum(true))}><img src={back} className="backImgResum"/></div>{(objectToArray.map((element,index)=>{
                return(
                    <div key={index} className="contentResum">
                       <div className="contentResum_int">
                            <p className="contentResum_int_date">{element.fecha}</p>
                                <p className="contentResum_int_day">{element.diaDeLaSemana}</p>
                                <div className="contentResum_int_img"><img src={element.feelingI} className="contentResum_int_img_I"/></div>
                       </div>
                        
                    </div>
                )
            })) }</div>)}</div>
        </div>
        {/* <div>{objectToArray.map((element,index)=>{
            console.log(element);
                return(
                    <div key={index}>
                        <p>{`here ${element.fecha}`}</p>

                    </div>
                )
            })}</div> */}
    </>
)
}

export default Statistics;