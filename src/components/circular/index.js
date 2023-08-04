import React from 'react';
import './estilos.css'; // Importa el archivo CSS donde definiremos los estilos
import Modal from '../Modal';

const Circle = ({title, image, diets}) => {


    return (
        <div class="container-fluid contGralRecetaCircular">
            <div class="containerTitle ">
                <label>{title}</label>
            </div>
            
            <div className="circle-container">
                    <div class="etiqtaIZQ">
                        {/* btn lanza modal */}
                        <button type="button" class="btn btnGeoloc" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Dietas
                        </button>
                        
                        {/* Modal */}
                        <Modal diets={diets}/>
                    </div>
                    
                    <div className="circle">
                        <img src={image} class="imagen" alt={"not"}/>                    
                    </div>
                    
                    <div class="etiqtaDER">
                        {/* btn lanza modal */}
                        <button type="button" class="btn btnGeoloc" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Dietas
                        </button>
                        
                        {/* Modal */}
                        <Modal diets={diets}/>
                    </div>
            </div>

            <div class="containerTitle">
                <label>Paso a paso</label>
            </div>
        </div>
                            
    );
};

export default Circle;
