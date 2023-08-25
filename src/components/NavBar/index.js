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
        <nav class="navbar navbar-expand-xl bg-body-tertiary contNavGral">
            <div class="container">
                {/* Logo */}
                <a class="navbar-brand" href="/">
                    <img src={logo} alt='not found' width={"38"} height={"38"}/>
                </a>

                <button class="navbar-toggler iconoHamburg" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                {/* menu barra y hamburguesa TODO junto */}
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    {
                        userActual === true &&
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/home">Home</a>
                            </li>
                        </ul>
                    }                    

                    {/* login/Logout Registrarse*/}
                    {
                        userActual === true ?
                        <>
                            <span className='contNombreUser'>Hola, {name} <SentimentSatisfiedAltIcon/> !!</span>
                            <button class="btn btn-secundary btnLog" onClick={handleLogout}>Logout</button>
                        </>
                        :
                        <div class='container contRegistrarse'> 
                            <div class="row">
                                {/* msj bienvenido */}
                                <div class="container col-11 contBienvenido">
                                    <span className='msjBienvenido'>Bienvenido visitante, registrate para acceder a la mayor Base de datos de Recetas</span>
                                </div>
                                
                                {/* regist - login */}
                                <div class="container col-1 contLogin">
                                    <a href='/registrarse ' class="btn btn-secundary btnLog">Registrarse</a>
                                    <a href='/login' class="btn btn-secundary btnLog">Login</a>                            
                                </div>
                            </div>                            
                        </div>
                        
                    }
                </div>
            </div>
        </nav>
    )
}

export default NavBar;