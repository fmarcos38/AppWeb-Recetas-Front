import React from 'react'
import logo from '../../imagenes/logo.ico';
import userLog from '../../localStorage';
import { useNavigate } from 'react-router-dom';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import './estilos.css';

function NavBar({userActual, name}) {

    const navigate = useNavigate();
    
    const handleLogout = (e) => {
        userLog.logout();
        navigate('/');
        window.location.reload();
    };

    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary contNavGral">
          <div class="container-fluid">
            {/* logo */}
            <a class="navbar-brand" href="/">
              <img src={logo} alt='not found' width={"38"} height={"38"}/>
            </a>
            
           {/* btn hambur */}
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            {/* menu nav y hambur */}
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav listaMenu">                
                {/* home */}
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/home">Home</a>
                </li> 
                {/* crear R */}
                {
                  userActual.role === "admin" &&
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/createR">Crea receta</a>
                  </li>
                }                
                
                {/* nombr user */}
                <li class="nav-item">                  
                {
                  userActual === true &&
                  <>
                    <span className='nav-link contNombreUser'>Hola, {name} <SentimentSatisfiedAltIcon/> !!</span>
                  </>
                }
                </li>
                {/* logout */}
                <li class="nav-item">
                {
                  userActual === true &&
                  <>
                    <button class="btn btn-secundary btnLog" onClick={handleLogout}>Logout</button>
                  </>
                }
                </li>
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
            </div>
          </div>
        </nav>
    )
}

export default NavBar