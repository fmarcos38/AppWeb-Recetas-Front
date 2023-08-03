import React from 'react'
import CardReceta from '../CardRecetas';
import './estilos.css';
import Loading from "../Loading"

function ListaRecetas({load, allRecetas}) {


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
                                <div key={r._id}>
                                    <CardReceta title={r.title} image={r.image} diets={r.diets}/>
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