import { GET_RECETAS, GET_RECETA_BY_ID, GET_USER, LOAD, LOGIN, REGISTRARSE, RESET_DETALLE, RESET_FILTRO } from "./actionsType";
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

//trae rec por ID
export function getRecetaById(_id){
    return async function(dispatch){
        const resp = await axios.get(`${urlDesarrollo}/recetas/${_id}`);
        return dispatch({type: GET_RECETA_BY_ID, payload: resp.data});
    }
};
export function resetDetalle(){
    return {type: RESET_DETALLE};
}

export function resetFiltro(desde){
    return async function(dispatch){
        const resp = await axios.get(`${urlDesarrollo}/recetas?desde=${desde}`);
        return  dispatch({ type: RESET_FILTRO, payload: resp.data });
    }
}
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

//trae user por email
export function getUser(email){
    return async function(dispatch){
        const resp = await axios.get(`${urlDesarrollo}/users/${email}`);
        return dispatch({type: GET_USER, payload: resp.data});
    }
};

//agrega fav
export function agregaFav(email, _id){
    console.log("email", email);
    console.log("_id", _id);
    return async function(){
        await axios.post(`${urlDesarrollo}/users/agregafav/${email}`,{_id:_id});
    }
};
//elim fav
export function eliminaFav(email, _id){
    return async function(){
        await axios.post(`${urlDesarrollo}/users/elimFav/${email}`,{_id:_id});        
    }
};