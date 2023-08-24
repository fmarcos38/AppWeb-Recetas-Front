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
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';


function Home() {

    //const userStorage = localStorage.getItem('user');  
    const userStorage = userLog.getUserActual(); console.log("userLog:", userStorage);
    const navigate = useNavigate();    

    const allRecetas = useSelector(state => state.allRecetas);
    const load = useSelector(state => state.load);
    const dispatch = useDispatch();
    
    //estados q le paso a la navbar
    const [userActual, setUserActual] = useState(false);
    const [name, setName] = useState("visitante");
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
    const [ingrediente, setIngrediente] = useState("");

    //para la seleccion de la dieta
    const handleChecked = (e) => {
        if(e.target.checked === true){
            setDieta(e.target.value);      
        }else{
            setDieta("");
        }
    };
    //para busqueda por ingrediente
    const handelChangeIng = (e) => {
        setIngrediente(e.target.value);
    };    

    /*---Paginación-------------------------------------------------------------------------------------------*/
    //para la paginación --> sacar totlPaginas = (recetasTot/cantRecPorPag) 
    const [paginaActual, setPaginaActual] = useState(1); //estado pagina actual
    let totalPag = 0;

    /* utilizo un If para calcular la cantidad de items q debe mostrar el paginado(me refiero a los num de pag [pag1, pag2...etc] segun la cant de recetas retornadas del back) */
    if(!dieta && !ingrediente){
        totalPag = Math.ceil(100 / 20);   
    }else{
        totalPag = Math.ceil(allRecetas.page.totalConsultaAct / 20);
    }
    
    const onChangePag = (numPag) => {
        setPaginaActual(numPag);
    };
    const calculoHasta = (pagAct) =>{
        return 20 * pagAct;
    };
    //calculo desde y hasta
    const calculoDesde = (pagAct) => {            
        if(pagAct === 1){
            return 0;
        }else{
            return calculoHasta(pagAct) - 20;
        }
    }    
    
    //submit btn search
    const handleSubmit = (e) => {
        e.preventDefault();
        if(dieta || ingrediente){
            dispatch(getRecetas(paginaActual, ingrediente, dieta, calculoHasta(paginaActual)));  
            setPaginaActual(1);
        }else{
            alert("No seleccionaste ningún filtro!!");
        }
    };

    //resetea filtros
    const handleResetFiltro = () => {
        dispatch(getRecetas(calculoDesde(paginaActual)));
        setDieta("");
        setIngrediente("");
        var radio = document.querySelector('input[type=radio][name=dieta]:checked'); //quita la seleccion del radio buttom
        if(radio){ radio.checked = false; }
    }; 

    //para las recetas
    useEffect(()=>{        
        //según los params q envio Va con dicha url
        if(!dieta && !ingrediente){
            dispatch(getRecetas(calculoDesde(paginaActual)));
        }else{
            dispatch(getRecetas(calculoDesde(paginaActual),ingrediente, dieta, calculoHasta(paginaActual)));
        }        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[dispatch, paginaActual]);

    //para disparar la action q me trae los datros del user(para favoritos y me gusta)
    useEffect(() => {
        if(!userStorage){
            return;
        }else{
            dispatch(getUser(userStorage.user.email));
        }
    }, [dispatch, userStorage]);

    //para actualizar nombre y userActual
    useEffect(()=>{
        if(!userStorage){
            return;
        }else{
            setName(userStorage.user.name);
            setUserActual(true);
        }
    },[name, userStorage,userActual]);

    
    
    return (
        <div className={diaNoche === false ? "contHomeN" : "contHomeD"}>
            <NavBar userStorage={userStorage} userActual={userActual} name={name}/>

            {
                userActual === true ?
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
                                    <input class="form-control me-2" type="search" value={ingrediente} onChange={handelChangeIng} placeholder="Ingrediente" aria-label="Search"/>

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
                                barbie={barbie} 
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
                :
                <div class="container contHomeRegistrarse">
                    <a href='/registrarse' className='reg'>Ve a Registrarte</a>
                </div>
            }
        </div>
    )
}

export default Home


