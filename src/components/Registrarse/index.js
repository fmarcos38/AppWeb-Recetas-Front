import React, { useState } from 'react'
import "./estilos.css";
import { useDispatch } from 'react-redux';
import { registrarse } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';


function Registrarse() {

    const initialState = {
        name: "", email: "", password: "", verifPassword: ""
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

        if (!state.verifPassword.trim()) {
            newErrors.verifPassword = 'La contraseña es obligatoria';
        } else if (state.verifPassword.length < 6) {
            newErrors.verifPassword = 'La contraseña debe tener al menos 6 caracteres';
        }else if(state.password !== state.verifPassword){
            newErrors.verifPassword = 'Las contraseñas no coinciden';
        } else {
            newErrors.verifPassword = '';
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
        <div class="contGralReg">
                <form onSubmit={handleSub} class="container card">
                <h1>Registrate para acceder a todas las recetas</h1>
                <div class="tituloP">
                    <img src='https://img1.picmix.com/output/stamp/normal/3/1/6/8/498613_71577.gif' class="imgLog1R" alt=''/>
                    <img src='https://www.gifsanimados.org/data/media/92/cocinero-y-chef-imagen-animada-0002.gif' class="imgLog2R" alt=''/>
                </div>
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
                    <label for="pass" class="form-label">Vuelva a ing su Password</label>
                    <input type="text" class="form-control" value={state.verifPassword} onChange={handleChange} id="verifPassword" placeholder="your pass"/>
                    {errors.verifPassword && ( <span className="error-message">{errors.verifPassword}</span> )}
                </div>
                <div class="mb-3">
                    <button class="btn btn-primary"type='submit'>Registrarse</button>
                </div>
                
            </form>
            
        </div>
    )
}

export default Registrarse