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

                {/* login/Logout Registrarse*/}
                {
                        userActual === true &&
                        <>
                            <span className='contNombreUser'>Hola, {name} <SentimentSatisfiedAltIcon/> !!</span>
                        </>
                    }

                <button class="navbar-toggler iconoHamburg" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                {/* menu barra y hamburguesa TODO junto */}
                <div class="collapse navbar-collapse contMenu" id="navbarSupportedContent">
                    {
                        <ul class="listaMenu">
                            {
                                userActual === true &&
                                <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/home">Home</a>
                                </li>
                            }
                            {
                                userActual === true &&
                                <li>
                                <button class="btn btn-secundary btnLog" onClick={handleLogout}>Logout</button>
                                </li>
                            }
                            
                            {
                                userActual === false &&
                                <il>
                                    <a href='/registrarse ' class="btn btn-secundary btnLog">Registrarse</a>
                                </il>
                            }
                            {
                                userActual === false &&
                                <il>
                                    <a href='/login' class="btn btn-secundary btnLog">Login</a>
                                </il>
                            }
                        </ul>
                    }                  
                </div>
            </div>
        </nav>
    )
}

export default NavBar;

