import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getRecetaById, resetDetalle } from '../../redux/actions';
import "./estilos.css";

function DetalleReceta() {

    const { _id, dia, barbie } = useParams();
    const receta = useSelector(state => state.detalleReceta);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRecetaById(_id));

        return () => {
            dispatch(resetDetalle());
        }
    }, [_id, dispatch]);


    return (
        <div className={dia === "false" ? "contDN" : "contDD"}>
            <div className={barbie === "false" ? "barbieD" : "kenD"}>
                <div class="row">
                    {/* dietas */}
                    <div class="container col-2 contIzq">{/* contIzq está desarrollado en estilos Home */}    
                    <div className={dia === "true" && barbie === "true" ? 'contIzqKD' : ''}>                
                        <h4>Dietas:</h4>
                        <ul>
                            {
                                receta.diets?.map(d => 
                                    <li key={d.name}>{d.name}</li>)
                            }
                        </ul>
                    </div>
                    </div>
    
                    {/* paso a paso */}
                    <div class="container col-8 contMed">
                    <div className={dia === "true" && barbie === "true" ? 'contIzqKD' : ''}>
                        <h2>Paso a Paso</h2>
                        {
                            receta.analyzedInstructions?.map(paso => {
                                return(
                                    <div key={paso.number} class="contPaso">
                                    <span >{paso.number}- {paso.step}</span>
                                    </div>
                                )
                            })
                        }
                        {/* btn Info Nuticional */}
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Info Nutricional
                        </button>
                    
                        {/* Modal */}
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Info Nutricional</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                {/* cuerpo modal */}
                                <div class="modal-body">
                                    <ul>
                                        {
                                            receta.nutrition?.map(n => 
                                                <li>
                                                    <b>{n.name}:</b> {n.amount}{n.unit}
                                                </li>)
                                        }
                                    </ul>
                                </div>

                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
    
                    {/* ingredientes */}
                    <div class="container col-2 contDer">
                        <div className={dia === "true" && barbie === "true" ? 'contIzqKD' : ''}>
                            <h5>Ingredientes</h5>
                            <ul>
                                {
                                    receta.analyzedInstructions?.map(
                                        paso => paso.ingredients?.map(
                                            ing => 
                                                <li key={ing.name}>{ing.name}</li>
                                        ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>            
            
        </div>
    )
}

export default DetalleReceta