import React from 'react';
import './estilos.css'; 

const Circle = ({title, image, diets}) => {


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
        </div>
                            
    );
};

export default Circle;
