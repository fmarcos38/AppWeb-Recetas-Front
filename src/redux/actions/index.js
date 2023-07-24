import { GET_RECETAS, LOAD } from "./actionsType";
import axios from "axios";


/*---------actions Recetas CRUD----------------*/
//trae todas las recetas Api + DB
export function getRecetas(){
    return async function (dispatch) {
        dispatch({type: LOAD}); 
        
        let resp = await axios.get(`http://localhost:8000/recetas`);
        console.log("respuestaB:",  resp)
        return  dispatch({ type: GET_RECETAS, payload: resp.data });    
    };
};