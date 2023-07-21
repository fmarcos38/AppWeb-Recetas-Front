import { GET_RECETAS, LOAD } from "./actionsType";
import axios from "axios";

/*---action LOAD-----*/
export function load(){
    return function(dispatch){
        return dispatch({type: LOAD})
    }
};

/*---------actions Recetas CRUD----------------*/
//trae todas las recetas Api + DB
export function getRecetas(){
    return async function(dispatch){
        const resp = await axios.get("34.16.137.132:8000/recetas");
        return dispatch({type: GET_RECETAS, payload: resp.data});
    }
};