import React from 'react'
import CardReceta from '../CardRecetas';
import './estilos.css';
import Loading from "../Loading"
import Circle from '../circular';

function ListaRecetas({load, allRecetas, barbie}) {


    return (
        <div class="container contGralR">
            {
                load ? 
                <>
                    <Loading/>
                </>
                :
                <div class="container contCadaR">
                    {
                        allRecetas.recetas[0] ?
                        allRecetas.recetas.map(r => {
                            return(
                                <div class="container contReceta">
                                    {
                                    barbie !== true ?
                                        
                                        <Circle title={r.title} image={r.image} diets={r.diets}/>
                                        
                                    :
                                        
                                        <CardReceta title={r.title} image={r.image} diets={r.diets}/>                                    
                                        
                                    }
                                </div>                                                                
                            )
                        }) :
                        <span>No recetas</span>
                    }
                </div>
                
            }
            
        </div>
    )
}

export default ListaRecetas