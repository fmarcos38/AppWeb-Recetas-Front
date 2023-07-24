import React, { useEffect } from 'react'
import "./estilos.css";
import { useDispatch } from 'react-redux';
import { getRecetas } from '../../redux/actions';


function LandingPage() {

    const dispatch = useDispatch();
    /* disparo action para cargar las recetas EN estado global */
    /* useEffect(() => {
        dispatch(getRecetas());
    },[dispatch]); */


    return (
        <div class='container-fluid cont-principal'>
            <h1 class="container">Bienvenid@ al mndo de las recetas </h1>
            <a href={'/home'}>
                <button>Comenzar</button>
            </a>
        </div>
    )
}

export default LandingPage