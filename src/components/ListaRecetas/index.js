import React from 'react'
import CardReceta from '../CardRecetas';
import './estilos.css';
import Loading from "../Loading"
import Circle from '../circular';

function ListaRecetas({load, allRecetas, barbie}) {


    return (
        <div class="container-fluid contGralR">
            {
                load ? 
                <>
                    <Loading/>
                </>
                :
                <div class=" contListaRecetas">
                    {

                        allRecetas.recetas[0] ?
                        allRecetas.recetas.map(r => {
                            return(
                                <>
                                    {
                                    barbie !== true ?
                                        <div key={r._id}>
                                            <Circle title={r.title} image={r.image} diets={r.diets}/>
                                        </div>
                                    :
                                        <div key={r._id}>
                                            <CardReceta title={r.title} image={r.image} diets={r.diets}/>                                    
                                        </div>
                                    }
                                </>                                                                
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