import { GET_RECETAS, GET_RECETA_BY_ID, GET_USER, LOAD, LOGIN, REGISTRARSE, RESET_DETALLE, RESET_FILTRO, RESET_USER } from "./actionsType";
import axios from "axios";
import { urlDesarrollo } from "./urls";

/*---------actions Recetas CRUD----------------*/
//trae todas las recetas Api + DB
export function getRecetas(desde, palabra, dieta, hasta){
    return async function (dispatch) {
        dispatch({type: LOAD}); 
        let resp = [];
        if(palabra && dieta){
            resp = await axios.get(`${urlDesarrollo}/recetas?desde=${desde}&palabra=${palabra}&dieta=${dieta}&hasta=${hasta}`);            
        }else if(palabra){
            resp = await axios.get(`${urlDesarrollo}/recetas?desde=${desde}&palabra=${palabra}&hasta=${hasta}`);
        }else if(dieta){
            resp = await axios.get(`${urlDesarrollo}/recetas?desde=${desde}&dieta=${dieta}&hasta=${hasta}`);
        }else{
            resp = await axios.get(`${urlDesarrollo}/recetas?desde=${desde}`);
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


export function login(data){
    return async function(dispatch){        
        const resp = await axios.post(`${urlDesarrollo}/auth/login`, data);
        
        if(resp.data.token){
            localStorage.setItem('user', JSON.stringify(resp.data)); console.log("userLog:", localStorage.getItem('user'));
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
    return async function(){
        await axios.post(`${urlDesarrollo}/users/agregafav/${email}`,{_id:_id});
    }
};

//Me gusta -> agrega/borra
export function meGusta(email, _id){
    return async function(){
        await axios.post(`${urlDesarrollo}/users/meGusta/${email}`,{_id:_id});
    }
}
export function resetUser(){
    return {type: RESET_USER};
}