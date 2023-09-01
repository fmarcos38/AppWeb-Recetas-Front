import React from 'react';
import logo from '../../imagenes/logo.ico';
import './estilos.css';
import userLog from '../../localStorage';
import { useNavigate } from 'react-router-dom';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';



function NavBar({userActual, name}) {  
    
    const navigate = useNavigate();
    const handleLogout = (e) => {
        userLog.logout();
        navigate('/');
        window.location.reload();
    };


    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary contNavGral">
            <div class="container-fluid row">
                {/* Logo */}
                <div class="container-fluid col-2 contLogo">
                    <a class="navbar-brand" href="/">
                        <img src={logo} alt='not found' width={"38"} height={"38"}/>
                    </a>
                </div>
                
                {/* Items nav */}
                <div class="col">

                </div>

                {/* login/Logout Registrarse*/}
                <div class="container-fluid col-4 contNombre">
                    <div className='contNombPG'>
                    {
                        userActual === true &&
                        <>
                            <span className='contNombreUser'>Hola, {name} <SentimentSatisfiedAltIcon/> !!</span>
                            <button class="btn btn-secundary btnLog" onClick={handleLogout}>Logout</button>
                        </>
                    }
                    </div>

                    {/* menu Hamburg */}
                    <div className='contMPCH'>
                        <button class="navbar-toggler iconoHamburg btnHambur" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        {/* menu barra y hamburguesa TODO junto */}
                        <div class="collapse navbar-collapse contMenu" id="navbarSupportedContent">
                            {
                                <ul class="listaMenu">
                            {
                                userActual === true &&
                                <span >
                                <a class="nav-link active" aria-current="page" href="/home">Home</a>
                                </span>
                            }
                            {
                                userActual === true &&
                                <span>
                                <button class="btn btn-secundary btnLog" onClick={handleLogout}>Logout</button>
                                </span>
                            }
                            
                            {
                                userActual === false &&
                                <span>
                                    <a href='/registrarse ' class="btn btn-secundary btnLog">Registrarse</a>
                                </span>
                            }
                            {
                                userActual === false &&
                                <span>
                                    <a href='/login' class="btn btn-secundary btnLog">Login</a>
                                </span>
                            }
                                </ul>
                            }                  
                        </div>
                    </div>
                </div>
                
            </div>
        </nav>
    )
}

export default NavBar;

