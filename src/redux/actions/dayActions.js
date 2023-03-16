import { dayTypes } from "../types/dayTypes";

const dataDays = [];

export const daySendAction = ( data ) => {

    return ( dispatch ) =>{
        dataDays.push( data );
        console.log(dataDays);
        //INICIO DEL INTENTO DE PONERLO EN SESSION__________________________
        // sessionStorage.setItem('feellingSelected',JSON.stringify(dataDays));
        // const getFeeling = JSON.parse(sessionStorage.getItem('feellingSelected'));
        // console.log(getFeeling);
        //FIN DEL INTENTO DE PONERLO EN SESION ________________________
        dispatch(getDataDays(dataDays));
        //..dataDays=esto envia a statdistics los datos como un objeto, mas no como un array| {...dataDays} | {dataDays} este es el qe estaba usando pero react dice que es un error
    }
    
}

const getDataDays = (dataD) => {
    return{
        type:dayTypes.DAY_SEND,
        payload: { ...dataD }
    }
}   