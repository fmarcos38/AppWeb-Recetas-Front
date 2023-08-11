import React from 'react';
import './estilos.css';

import Favorito from '../Botones/Favoritos';

function CardReceta({_id, title, image, diets, diaNoche, barbie}) {
    return (
        <div class="container contCard">
            
            <div class='containerTitle'>
                <h6>{title}</h6>
            </div>

            <div class='containerTitle '>
                <img src={image} alt='' class='imgReceta'/>
            </div>
            
            <div class='containerTitle'>
                    <p>Tipos de dieta:</p>
            </div>
            
            <div class='containerTitle'>
                    <ul>
                        {
                            diets?.map(t => 
                                <li key={t.name}>
                                    {t.name}
                                </li>
                            )
                        }
                    </ul>                
            </div>
                
            {/* btns Fav y Delete */}
            <div class="container">
                <div class="position-absolute bottom-0 start-0 contBotones">
                    <Favorito/>
                </div>
                <div class="position-absolute bottom-0 start-50 translate-middle-x contBotones">
                    <a href={`/detalle/${diaNoche}/${barbie}/${_id}`} class="btn btn-dark">
                        Paso a Paso
                    </a>
                </div>
                <div class="position-absolute bottom-0 end-0 contBotones">
                    
                </div>               
            </div>
        </div>
    )
}

export default CardReceta