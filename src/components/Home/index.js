import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './estilos.css';
import ListaRecetas from '../ListaRecetas';
import NavBar from '../NavBar';
import { getRecetas, getUser } from '../../redux/actions';
import Paginado from '../Paginado';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Switch from '@mui/material/Switch';
import userLog from '../../localStorage';



function Home() {

    const userStorage = userLog.getUserActual;
    const allRecetas = useSelector(state => state.allRecetas);
    const load = useSelector(state => state.load);
    const dispatch = useDispatch();

    /* -------dia noche--------------------------- */
    const [diaNoche, setDiaNoche] = useState(false);
    
    const handleDN = (e) => {
        setDiaNoche(!diaNoche);
    };
    /*---barbie/ken-------------------------------*/
    const [barbie, setBarbie] = useState(false);

    const handleBK = (e) => {
        setBarbie(!barbie);
    };
    
    /*------------Filtros--------------------------------*/
    const tiposDietas = useSelector(state => state.TiposDietas);
    const [dieta, setDieta] = useState();    
    
    //para la seleccion del filtro
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
        }else{
            alert("No seleccionaste ningún filtro!!");
        }
    };

    /*---Paginación-------------------------------------------------------------------------------------------*/
    //para la paginación --> sacar totlPaginas = (recetasTot/cantRecPorPag) 
    const [paginaActual, setPaginaActual] = useState(1); //estado pagina actual
    let totalPag = 0;

    /* utilizo un If para calcular la cantidad de items q debe mostrar el paginado(me refiero a los num de pag [pag1, pag2...etc] segun la cant de recetas retornadas del back) */
    if(!dieta){
        totalPag = Math.ceil(100 / 20);   
    }else{
        totalPag = Math.ceil(allRecetas.page.totalConsultaAct / 20);
    }
    
    const onChangePag = (numPag) => {
        setPaginaActual(numPag);
    };   
    const calculoDesde = (pagAct) => {            
        if(pagAct === 1){
            return 0;
        }else{
            return (pagAct - 1) * 5;
        }
    }
    //----------------------------------------------------------------------------------------------------------
    const handleResetFiltro = () => {
        dispatch(getRecetas(calculoDesde(paginaActual)));
        setDieta("");
        var radio = document.querySelector('input[type=radio][name=dieta]:checked');
        radio.checked = false;
    };


    useEffect(()=>{
        //para el paginado
        
        //según los params q envio Va con dicha url
        if(!dieta){
            dispatch(getRecetas(calculoDesde(paginaActual)));
        }else{
            dispatch(getRecetas(calculoDesde(paginaActual),dieta));//camb en el back
        }        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[dispatch, paginaActual]);

    useEffect(() => {
        dispatch(getUser(userStorage.user.email));
    }, [dispatch, userStorage.user.email]);


    return (
        <div className={diaNoche === false ? "contHomeN" : "contHomeD"}>
            <NavBar/>
            <div class="container-fluid">{/* boostrap divide en 12 columnas */}            
                <div class="row">
                    {/* contenedor btns dia/noche barbie/ken y filtros */}
                    <div class="col-2 contIzq container"> {/* este div abarca 3 de las 12col */}                      
                        <div className='contBtnsBarbie'>
                            <ModeNightIcon className='luna'/>
                            <Switch onChange={handleDN} inputProps={{ 'aria-label': 'controlled' }} />
                            <WbSunnyIcon className='sol'/>
                        
                            <br/>
                            <label class="barbie">Barbie</label>
                            <Switch onChange={handleBK} inputProps={{ 'aria-label': 'controlled' }} />
                            <label class="ken">Ken</label>
                        </div>

                        <div class="container-fluid">  
                            <div class={!barbie ? "contSearch" : "contSearchFK"}>
                                <form onSubmit={handleSubmit} class="formFiltros">
                                    <label class={!barbie ? "labelSearch" : "labelSearchK"}>Search by</label>                                        
                                    <input class="form-control me-2" type="search" placeholder="Ingrediente" aria-label="Search"/>

                                    <h3 class={!barbie ? "tituloFiltro" : "tituloFiltrosK"}>Tipo de dieta</h3>
                                    {
                                        tiposDietas?.map(d => {
                                            return(
                                                <div key={d._id}>
                                                    {/* <input type='checkbox' id={d.tipo} value={d.tipo} onChange={handleChecked}/> */}
                                                    <input type={"radio"} name={"dieta"} value={d.tipo} onChange={handleChecked}/>
                                                    <label class={!barbie ? "labelSearch" : "labelSearchK"}>{d.tipo}</label>
                                                </div>
                                            )
                                        })
                                    }                                    
                                    
                                    <button class="btn btn-outline-info btnSearch" type="submit">Search</button>
                                </form>                                                          
                    
                                <button class="btn btn-info btnFiltro btnSearch" onClick={handleResetFiltro}>Reset Filtro</button>
                            </div>
                        </div>                                                       
                    </div>

                    {/* lista recetas */}
                    <div class="container col contMed"> {/* este abarca 9col */}
                        <div class="contTituloColMed">
                            <h2 class={!barbie ? "tituloFiltro" : "tituloFiltrosK"}>Encontrá las mejores recetas y soluciones para tus comidas</h2>
                        </div>
                        <div>
                            <ListaRecetas 
                                load={load} allRecetas={allRecetas} diaNoche={diaNoche} 
                                barbie={barbie} /* fav={fav} handleFav={handleFav} */
                            />
                            
                            {/* paginacion */}
                            {
                                <div>
                                    <Paginado paginaActual={paginaActual} totalPag={totalPag}
                                        onChangePag={onChangePag} barbie={barbie}/>
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


