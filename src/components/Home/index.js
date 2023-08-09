import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './estilos.css';
import ListaRecetas from '../ListaRecetas';
import NavBar from '../NavBar';
import { getRecetas } from '../../redux/actions';
import Paginado from '../Paginado';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Switch from '@mui/material/Switch';

function Home({ handleClick}) {

    const allRecetas = useSelector(state => state.allRecetas);
    const load = useSelector(state => state.load);
    const dispatch = useDispatch();

    //para la paginación --> sacar totlPaginas = (recetasTot/cantRecPorPag) 
    //console.log("allRecetas.page.registrosPorPagina: ", allRecetas.page.registrosPorPagina)
    const [paginaActual, setPaginaActual] = useState(1); //estado pagina actual
    const totalPag =  Math.ceil(100 / 20);//allRecetas.page.totalRecetasDB / allRecetas.page.registrosPorPagina;    
    const onChangePag = (numPag) => {
        setPaginaActual(numPag);
    };   
    
    /*--------------------------------------------*/
    const tiposDietas = useSelector(state => state.TiposDietas);
    const [dieta, setDieta] = useState();

    const handleChecked = (e) => {
        if(e.target.checked === true){
            setDieta(e.target.value);      
        }else{
            setDieta("");
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if(dieta){
            dispatch(getRecetas(paginaActual, dieta));
            //setDieta("");
        }else{
            alert("No seleccionaste ningún filtro!!");
        }
    };
    /*--------------------------------------------*/  
    
    /*---barbie/ken-------------------------------*/
    const [barbie, setBarbie] = useState(false);

    const handleChange = (e) => {
        setBarbie(!barbie);
    };
    //----------------------------------------------

    useEffect(()=>{
        //para el paginado
        const calculoDesde = (pagAct) => {            
            if(pagAct === 1){
                return 0;
            }else{
                return (pagAct - 1) * 5;
            }
        }
        //según los params q envio Va con dicha url
        if(!dieta){
            dispatch(getRecetas(calculoDesde(paginaActual)));
        }else{
            dispatch(getRecetas(calculoDesde(paginaActual),dieta));//camb en el back
        }        
    },[dieta, dispatch, paginaActual]);


    return (
        <div>
            <NavBar/>
            <div class="container-fluid">{/* boostrap divide en 12 columnas */}            
                <div class="row">
                    {/* contenedor btns dia/noche barbie/ken y filtros */}
                    <div class="col-2 contIzq container"> {/* este div abarca 3 de las 12col */}                      
                        <div className='contBtnsBarbie'>
                            <ModeNightIcon className='luna'/>
                            <Switch onChange={handleClick} inputProps={{ 'aria-label': 'controlled' }} />
                            <WbSunnyIcon className='sol'/>
                        
                            <br/>
                            <label class="barbie">Barbie</label>
                            <Switch onChange={handleChange} inputProps={{ 'aria-label': 'controlled' }} />
                            <label class="ken">Ken</label>
                        </div>

                        <div>
                                <h3 class='tituloFiltros'>Filtros</h3>
                                <form onSubmit={handleSubmit}>
                                    {
                                        tiposDietas?.map(d => {
                                            return(
                                                <div key={d._id}>
                                                    <input type='checkbox' id={d.tipo} checked={false} value={d.tipo} onChange={handleChecked}/>
                                                    <label className={"nombDieta"}>{d.tipo}</label>
                                                </div>
                                            )
                                        })
                                    }
                                    <button type='submit'>Filtrar</button>
                                </form>
                        </div>                                                       
                    </div>

                    {/* lista recetas */}
                    <div class="container col contMed"> {/* este abarca 9col */}
                        <div class="contTituloColMed">
                            <h2 className='tituloFiltros'>Encontrá las mejores recetas y soluciones para tus comidas</h2>
                        </div>
                        <div>
                            <ListaRecetas load={load} allRecetas={allRecetas} barbie={barbie}/>
                            {/* paginacion */}
                            {
                                <div>
                                    <Paginado paginaActual={paginaActual} totalPag={totalPag} onChangePag={onChangePag} barbie={barbie}/>
                                </div>
                            }
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home


