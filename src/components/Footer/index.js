import React from 'react'
import "./estilos.css";


function Footer() {
    return (
        <div>
            <div class="row">
                <div class="container col-3 footIzq">
                </div>

                <div class="container col-6 footCen">
                    <div class="container">
                        <span className='titulosMed'>Desarrollo Web: Marcos Forastiere</span>
                        <span className='titulosMed'>Full Stack Developer</span>
                    </div>
                </div>
                
                <div class="container col-3 footDer">
                </div>
            </div>
        </div>
    )
}

export default Footer