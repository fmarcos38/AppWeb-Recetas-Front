import React from 'react';
import './estilos.css';


function CardReceta({_id, title, image, diets, analyzedInstructions}) {
    return (
        <div class="card contPrincCard">
            <img src={image} alt='' className='imgReceta'/>
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">Tipos de dieta:</h6>
                {
                    diets?.map(t => {
                        return(
                            <div key={t}>
                                <p>{t}</p>
                            </div>
                        )
                    })
                }                
            </div>
            <div class="card-footer">
                <button></button>
                <button></button>
            </div>
        </div>
    )
}

export default CardReceta