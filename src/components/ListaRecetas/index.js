import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardReceta from '../CardRecetas';
import './estilos.css';
import { getRecetas } from '../../redux/actions';
import Loading from "../Loading"
import Paginado from '../Paginado';

function ListaRecetas() {

    const allRecetas = useSelector(state => state.allRecetas);
    const load = useSelector(state => state.load);
    const dispatch = useDispatch();    

    //para la paginación --> sacar totlPaginas = (recetasTot/cantRecPorPag) 
    //console.log("allRecetas.page.registrosPorPagina: ", allRecetas.page.registrosPorPagina)
    const [paginaActual, setPaginaActual] = useState(1); //estado pagina actual
    const totalPag =  Math.ceil(19/5);//allRecetas.page.totalRecetasDB / allRecetas.page.registrosPorPagina;
    //calculo la variable DESDE q mando al front    
    
    

    const onChangePag = (numPag) => {
        setPaginaActual(numPag);
    };   
    
    useEffect(()=>{

        const calculoDesde = (pagAct) => {
            console.log("pagActLista: ", pagAct)
            if(pagAct === 1){
                return 0;
            }else{
                return (pagAct - 1) * 5;
            }
        }

        dispatch(getRecetas(calculoDesde(paginaActual)));
    },[dispatch, paginaActual]);


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

            {/* paginacion */}
            {
                <div>
                    <Paginado paginaActual={paginaActual} totalPag={totalPag} onChangePag={onChangePag}/>
                </div>
            }
            
        </div>
    )
}

export default ListaRecetas