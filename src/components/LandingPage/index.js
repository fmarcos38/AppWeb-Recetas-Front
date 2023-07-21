import React from 'react'
import "./estilos.css";


function LandingPage() {
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