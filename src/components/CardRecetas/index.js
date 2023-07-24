import React from 'react';
import './estilos.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

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
                            <div key={t.name}>
                                <p>{t.name}</p>
                            </div>
                        )
                    })
                }                
            </div>
            <div class="card-footer contBtnsFavElim">
                <button className='cardButton'>
                    <FavoriteBorderIcon/>
                </button>
                <button className='cardButton'>
                    <DeleteForeverIcon/>
                </button>
            </div>
        </div>
    )
}

export default CardReceta