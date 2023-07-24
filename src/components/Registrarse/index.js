import React from 'react'
import "./estilos.css";


function Registrarse() {
    return (
        <div class="container contGralReg">
            <div class="card">
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="text" class="form-control" id="email" placeholder="your email"/>
                </div>
                <div class="mb-3">
                    <label for="pass" class="form-label">Another label</label>
                    <input type="text" class="form-control" id="pass" placeholder="your pass"/>
                </div>
                <div class="mb-3">
                    <button class="btn btn-primary">Registrarse</button>
                </div>
            </div>
        </div>
    )
}

export default Registrarse