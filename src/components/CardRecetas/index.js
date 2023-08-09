import React from 'react';
import './estilos.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

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
            <div class="card-footer contBtnsFavElim">
                <button className='cardButton'>
                    <FavoriteBorderIcon/>
                </button>

                <a href={`/detalle/${diaNoche}/${barbie}/${_id}`} class="btn btn-info">
                    Paso a Paso
                </a>

                <button className='cardButton'>
                    <DeleteForeverIcon/>
                </button>
            </div>
        </div>
    )
}

export default CardReceta