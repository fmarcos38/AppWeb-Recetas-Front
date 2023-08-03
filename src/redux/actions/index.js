import { FILTROS, GET_RECETAS, LOAD, LOGIN, REGISTRARSE } from "./actionsType";
import axios from "axios";
import { urlDesarrollo } from "./urls";

/*---------actions Recetas CRUD----------------*/
//trae todas las recetas Api + DB
export function getRecetas(desde, dieta){
    return async function (dispatch) {
        dispatch({type: LOAD}); 
        
        let resp = [];
        if(!dieta){
            resp = await axios.get(`${urlDesarrollo}/recetas?desde=${desde}`);
        }else{
            resp = await axios.get(`${urlDesarrollo}/recetas?desde=${desde}&dieta=${dieta}`);
        }
        
        return  dispatch({ type: GET_RECETAS, payload: resp.data });    
    };
};

//filtros
export function filtrar(desde, dieta){
    return async function(dispatch){        
console.log("Lo q mandaré:", dieta)
        const resp = await axios.post(`${urlDesarrollo}/recetas/filtro?desde=${desde}`, dieta);
        return dispatch({type: FILTROS, payload: resp.data});
    }
};
/*---------actions User----------------*/
export function registrarse(data){
    return async function(dispatch){
        const resp = await axios.post(`${urlDesarrollo}/auth`, data);
        
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
/**
 * data: 
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZtYXJjb3NfMjNAaG90bWFpbC5jb20iLCJpYXQiOjE2OTA1NTE5Nzd9.G9V0eo3TehiLOawlB8a1TOAs8fSI-zRWIUewm9p1WIk"
    user: {_id: '64c2d06f02f69d66256a44bf', name: 'marcos', email: 'fmarcos_23@hotmail.com', password: 'U2FsdGVkX1/zvvdoMq2zS4sz97dkzFTW95/34cu1GYA=', role: 'cliente', …}
*/
export function login(data){
    return async function(dispatch){        
        const resp = await axios.post(`${urlDesarrollo}/auth/login`, data);
        
        if(resp.data.token){
            localStorage.setItem('user', JSON.stringify(resp.data));
            return dispatch({type: LOGIN, payload: "ok"})
        }else{
            return dispatch({type: LOGIN, payload: "nook"});
        }        
    }
};