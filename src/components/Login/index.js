import React, { useState } from 'react';
import "./estilos.css";
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';

function Login() {

    const [state, setState] = useState({email: "", password: ""});
    const [errors, setErrors] = useState({email: "", password: ""});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleCh = (e) => {
        setState({...state, [e.target.id]: e.target.value});
    };
    const handleSub = (e) => {
        e.preventDefault();
        const newErrors = {...errors};
        
        //para error de email
        if (!state.email.trim()) {
            newErrors.email = 'El email es obligatorio';
        } else if (!/^\S+@\S+\.\S+$/.test(state.email)) {
            newErrors.email = 'El email ingresado no es válido';
        } else {
            newErrors.email = '';
        }
        //para error de pass
        if (!state.password.trim()) {
            newErrors.password = 'La contraseña es obligatoria';
        } else if (state.password.length < 6) {
            newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
        } else {
            newErrors.password = '';
        }

        //actualizo errores
        setErrors(newErrors);

        // si no hay errores------------------------------------
        if(!Object.values(newErrors).some((error) => !!error)){
            dispatch(login(state));
            setState({email:"", password: ""});
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Usuari@ loguead@ exitosamente !!',
                showConfirmButton: false,
                timer: 2000
            });
            navigate('/home');            
        }
    };


    return (        
        <div class="contGralLogin">
            <form class="container login" onSubmit={handleSub}>
                <div class="contTituloP">
                    <h1 class="tituloP">Login</h1>
                    <h5 class="tituloP">Enter your credentials</h5>
                </div>
                <div class="tituloP">
                    <img src='https://img1.picmix.com/output/stamp/normal/3/1/6/8/498613_71577.gif' class="imgLog1" alt=''/>
                    <img src='https://www.gifsanimados.org/data/media/92/cocinero-y-chef-imagen-animada-0002.gif' class="imgLog2" alt=''/>
                </div>
                <div cclass="tituloP">
                    <label for="email" class="form-label">Email</label>
                    <input type="text" class="form-control inputLog" value={state.email} id="email" onChange={handleCh} placeholder="your email"/>
                    {errors.email && <span className="error-message">{errors.email}</span>}

                    <label for="email" class="form-label labelPass">Password</label>
                    <input type="password" class="form-control inputLog" value={state.pass} id="password" onChange={handleCh} placeholder="your pass"/>
                    {errors.password && <span className="error-message">{errors.password}</span>}
                </div>
                <div class="tituloP">
                    <button class="btn btn-primary btnLogin" type='submit'>Login</button>
                </div>                
            </form>
        </div>
    )
}

export default Login