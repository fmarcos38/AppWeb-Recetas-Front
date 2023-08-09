import React from 'react';
import './estilos.css'; 
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


const Circle = ({ _id, title, image, diets, diaNoche, barbie }) => {


    return (
        <div class="container-fluid contGralRB">
            <div class="containerTitle">
                <h6 >{title}</h6>
            </div>

            <div class="containerTitle">
                
                    <img src={image} class="imagen" alt="..."/>
                                
            </div>
            
            <div class="card-body ">
                <p>Dietas en la que se puede incluir la receta:</p>
                <ul>
                    {
                        diets?.map(d => <li key={d.name}>{d.name}</li>)
                    }
                </ul>
            </div>

            {/* btns Fav y Delete */}
            <div class="card-footer contBtnsFavElim">
                <button className='cardButton'>
                    <FavoriteBorderIcon/>
                </button>
                
                <a href={`/detalle/${diaNoche}/${barbie}/${_id}`} class="btn btn-dark">
                    Paso a Paso
                </a>
                
                <button className='cardButton'>
                    <DeleteForeverIcon/>
                </button>
            </div>
        </div>
                            
    );
};

export default Circle;
