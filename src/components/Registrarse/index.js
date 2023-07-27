import React, { useState } from 'react'
import "./estilos.css";
import { useDispatch } from 'react-redux';
import { registrarse } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';


function Registrarse() {

    const initialState = {
        name: "", email: "", password: ""
    };

    const [state, setState] = useState(initialState);
    const [errors, setErrors] = useState(initialState);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setState({...state, [e.target.id]: e.target.value})
    };

    const handleSub = (e) => {
        e.preventDefault();
        const newErrors = {...errors};

        // Validations
        if (!state.name.trim()) {
        newErrors.name = 'El nombre es obligatorio';
        } else {
        newErrors.name = '';
        }

        if (!state.email.trim()) {
        newErrors.email = 'El email es obligatorio';
        } else if (!/^\S+@\S+\.\S+$/.test(state.email)) {
        newErrors.email = 'El email ingresado no es válido';
        } else {
        newErrors.email = '';
        }

        if (!state.password.trim()) {
            newErrors.password = 'La contraseña es obligatoria';
        } else if (state.password.length < 6) {
            newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
        } else {
            newErrors.password = '';
        }

        setErrors(newErrors);

    // si no hay errores------------------------------------
    if (!Object.values(newErrors).some((error) => !!error)) {
        
        dispatch(registrarse(state));
        setState(initialState);
        navigate("/login");
    }
    };

    
    return (
        <div class="container contGralReg">
            <h1>Registrate para acceder a todas las recetas</h1>
            <form onSubmit={handleSub} class="card">
                
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" value={state.name} onChange={handleChange} id="name" placeholder="your name"/>
                    {errors.name && <span className="error-message">{errors.name}</span>}
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="text" class="form-control" value={state.email} onChange={handleChange} id="email" placeholder="your email"/>
                    {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
                <div class="mb-3">
                    <label for="pass" class="form-label">Password</label>
                    <input type="text" class="form-control" value={state.password} onChange={handleChange} id="password" placeholder="your pass"/>
                    {errors.password && ( <span className="error-message">{errors.password}</span> )}
                </div>
                <div class="mb-3">
                    <button class="btn btn-primary"type='submit'>Registrarse</button>
                </div>
                
            </form>
            
        </div>
    )
}

export default Registrarse