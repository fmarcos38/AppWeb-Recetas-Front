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
        <section>
            <h1>Logeate para cocinar como un hijo de re mil puta, con las mejores recetas</h1>
            <form class="card" onSubmit={handleSub}>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="text" class="form-control" value={state.email} id="email" onChange={handleCh} placeholder="your email"/>
                    {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
                <div class="mb-3">
                    <label for="pass" class="form-label">Another label</label>
                    <input type="password" class="form-control" value={state.pass} id="password" onChange={handleCh} placeholder="your pass"/>
                    {errors.password && <span className="error-message">{errors.password}</span>}
                </div>
                <div class="mb-3">
                    <button class="btn btn-primary" type='submit'>Login</button>
                </div>                
            </form>
        </section>
    )
}

export default Login