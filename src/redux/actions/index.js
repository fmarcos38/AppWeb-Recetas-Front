import { GET_RECETAS, LOAD, LOGIN, REGISTRARSE } from "./actionsType";
import axios from "axios";
import { urlDesarrollo } from "./urls";

/*---------actions Recetas CRUD----------------*/
//trae todas las recetas Api + DB
export function getRecetas(){
    return async function (dispatch) {
        dispatch({type: LOAD}); 
        
        let resp = await axios.get(`${urlDesarrollo}/recetas`);
        return  dispatch({ type: GET_RECETAS, payload: resp.data });    
    };
};


/*---------actions User----------------*/
export function registrarse(data){
    return async function(dispatch){
        const resp = await axios.post(`${urlDesarrollo}/auth`, data);
        console.log("RespActionRegistrarse: ", resp.data);
        if(resp.data.token){
            localStorage.setItem('user', JSON.stringify(resp.data)); //asigno el token q viene del back
            return dispatch({type: REGISTRARSE, payload: "true"});
        }else{
            return dispatch({type: REGISTRARSE, payload: "false"});
        }
    }
};

//valida cuenta
export function validaCuenta(token){
    
};

//login
export function login(data){
    return async function(dispatch){        
        const resp = await axios.post(`${urlDesarrollo}/auth/login`, data);
        console.log("respAction: ", resp);
        if(resp.data.token){
            localStorage.setItem('user', JSON.stringify(resp.data));
            return dispatch({type: LOGIN, payload: "ok"})
        }else{
            return dispatch({type: LOGIN, payload: "nook"});
        }        
    }
};