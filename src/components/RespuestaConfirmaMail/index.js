import React from 'react'
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom'

function RspValidaMail() {

    const search = useLocation().search;
    const token = new URLSearchParams(search).get("token");//obtngo el token desde la url
    const dispatch = useDispatch;

    const handleValida = (e) => {
        
    };

    return (
        <div class="container-fluid">
            <h1>Gracias por registrarte</h1>
            <h2>Tu cuenta ha sido verificada correctamente!</h2>
            <h3 class=""> Ahora puedes disfrutar todas las funcionalidades de nuestra pagina</h3>
            <a href='/login'>Login</a>
        </div>
    )
}

export default RspValidaMail