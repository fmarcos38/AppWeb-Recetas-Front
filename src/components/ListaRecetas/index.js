import React from 'react'
import CardReceta from '../CardRecetas';
import './estilos.css';
import Loading from "../Loading"
import CardBarbie from '../CardBarbie';

function ListaRecetas({load, allRecetas, diaNoche ,barbie, /* fav, handleFav */}) {


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
                                        <CardBarbie _id={r._id} title={r.title} image={r.image} 
                                            diets={r.diets} diaNoche={diaNoche} barbie={barbie}
                                            /* fav={fav} handleFav={handleFav} */
                                        />
                                        
                                    :
                                        
                                        <CardReceta _id={r._id} title={r.title} image={r.image} diets={r.diets} diaNoche={diaNoche} barbie={barbie}/>                                    
                                        
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