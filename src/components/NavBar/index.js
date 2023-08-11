import React, { useEffect, useState } from 'react';
import logo from '../../imagenes/logo.ico';
import './estilos.css';
import userLog from '../../localStorage';
import { useNavigate } from 'react-router-dom';

function NavBar() {     
    
    //me traigo la data del user logeado
    const userData = userLog.getUserActual;  //console.log("data:", userData);
    const navigate = useNavigate();
    const [userActual, setUserActual] = useState(false);
    const [name, setName] = useState("visitante");
    
    useEffect(()=>{
        if(userData.name !== null){
            setName(userData.name);
            setUserActual(true);
        }
    },[userData]);
        

    const handleLogout = (e) => {
        userLog.logout();
        navigate('/');
    };


    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">
                    <img src={logo} alt='not found' width={"35"} height={"35"}/>
                </a>
                
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    {
                        userActual === true &&
                        <>
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/home">Home</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><hr class="dropdown-divider"/></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link disabled">Disabled</a>
                        </li>
                        </ul>
                        </>                        
                    }

                    {/* login/Logout Registrarse*/}
                    {
                        userActual === false ?
                        <>
                            <span>Bienvenido visitante, registrate para acceder a la mayor Base de datos de Recetas y cocinar como un verdadero CHEFF !!</span>
                            <a href='/login' class="btn btn-secundary btnLog">Login</a>
                            {/* registrarse */}
                            <a href='/registrarse ' class="btn btn-secundary btnLog">Registrarse</a>
                        </>
                        :
                        <>
                            <span className='contNombreUser'>Hola {name}</span>
                            <button class="btn btn-secundary btnLog" onClick={handleLogout}>Logout</button>
                        </>
                    }

                    {/* searchBar */}
                    {
                        userActual === true &&
                        <>
                            <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                        </>
                    }
                    
                </div>
            </div>
        </nav>
    )
}

export default NavBar