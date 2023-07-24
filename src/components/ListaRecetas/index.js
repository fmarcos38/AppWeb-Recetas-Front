import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardReceta from '../CardRecetas';
import './estilos.css';
import { getRecetas } from '../../redux/actions';
import Loading from "../Loading"


function ListaRecetas() {

    const allRecetas = useSelector(state => state.allRecetas);
    const load = useSelector(state => state.load);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getRecetas());
    },[dispatch]);
    
    return (
        <div class="contListaRecetas">
            {
                load ? 
                <>
                    <Loading/>
                </>
                :
                <>
                    {
                        allRecetas[0] ?
                        allRecetas.map(r => {
                            return(
                                <div key={r._id}>
                                    <CardReceta title={r.title} image={r.image} diets={r.diets}/>
                                </div>
                            )
                        }) :
                        <span>No recetas</span>
                    }
                </>
            }
            
        </div>
    )
}

export default ListaRecetas