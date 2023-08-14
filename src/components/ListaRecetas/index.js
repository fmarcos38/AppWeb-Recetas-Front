import React from 'react'
import CardReceta from '../CardRecetas';
import './estilos.css';
import Loading from "../Loading"
import CardBarbie from '../CardBarbie';

function ListaRecetas({load, allRecetas, diaNoche ,barbie}) {


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
                                        />
                                        
                                    :
                                        
                                        <CardReceta _id={r._id} title={r.title} image={r.image} diets={r.diets} diaNoche={diaNoche} barbie={barbie}/>                                    
                                        
                                    }
                                </div>                                                                
                            )
                        }) :
                        <span className={barbie !== true ? "msgNorecetas" : "msgNorecetasK"}>No se encontron recetas para dicha busqueda</span>
                    }
                </div>                
            }
            
        </div>
    )
}

export default ListaRecetas