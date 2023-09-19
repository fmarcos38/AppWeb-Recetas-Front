import React, { useState } from 'react';
import './estilos.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import swal from 'sweetalert';
import userLog from '../../localStorage';
import { useDispatch, useSelector } from 'react-redux';
import { agregaFav, elimR, meGusta } from '../../redux/actions';

function CardReceta({_id, title, image, diets, diaNoche, barbie}) {
    
/*---Favoritos---------------------------------------*/  
    const userStorage = userLog.getUserActual();
    const userReducer = useSelector(state => state.user);
    const [favStorage, setFavStorage] = useState(userReducer.favorites); 
    const [meG, setMeG] = useState(userReducer.meGusta); 
    const dispatch = useDispatch();

    /* btn fav */
    const handleFav = (_id) => {     
        if(!userStorage){
            swal({
            title: "Debes estar Registrado para poder agregar a Fav/me gusta",
            icon: "error",
            button: "Aceptar",
        });
            //navigate("/registrarse");            
        }else{  
            if (!favStorage.find(e => e === _id)) {//si el producto NO esta en fav del localStor
                dispatch(agregaFav(userStorage.user.email, _id)); 
                //asigno a state el erray de fav q está en el localStor
                let state = userStorage.user.favorites;
                state.push(_id);
                setFavStorage(state);  //actualizo estado    
                swal({
                title: "Producto Añadido",
                text: `agregado a Favoritos`,
                icon: "success",
                button: "Aceptar",
                });        
            }
            if (favStorage.find(e => e === _id)){            
                dispatch(agregaFav(userStorage.user.email, _id)); //borro de la DB
                //asigno a state el erray de fav q está en el localStor
                let newState = userStorage.user.favorites;
                newState = newState.filter((fav) => fav !== _id);
                //guarda el nuevo array en fav del localStor
                localStorage.setItem('user.favorites', favStorage);
                setFavStorage(newState);  //actualizo estado 
                swal({
                    title: "Prod Eliminado",
                    text: "eliminado de Favoritos",
                    icon: "success",
                    button: "Aceptar",
                });
            }
        } 
    }
    /* btn me gusta */
    const handleMG = (_id) => {      
        if(!userStorage){
            swal({
            title: "Debes estar Registrado para darle Me gusta",
            icon: "error",
            button: "Aceptar",
        });
            //navigate("/registrarse");            
        }else{  
            if (!meG.find(e => e === _id)) {//si el producto NO esta en fav del localStor
                dispatch(meGusta(userStorage.user.email, _id)); 
                //asigno a state el erray de fav q está en el localStor
                let state = userStorage.user.meGusta;
                state.push(_id);
                setMeG(state);  //actualizo estado                    
            }
            if (meG.find(e => e === _id)){            
                dispatch(meGusta(userStorage.user.email, _id)); //borro de la DB
                //asigno a state el erray de fav q está en el localStor
                let newState = userStorage.user.meGusta;
                newState = newState.filter((mg) => mg !== _id);
                setMeG(newState);  //actualizo estado                 
            }
        } 
    }
    /* btn elim */
    const handleElimR = (_id) => {
        dispatch(elimR(_id))
        swal({
            title: "Receta elim con exito",
            text: `agregado a Favoritos`,
            icon: "success",
            button: "Aceptar",
        }); 
        window.location.reload();
    };
    

    return (
        <div class="container-fluid position-relative contCard">
            {/* titulo */}
            <div class='containerTitle'>
                <h6>{title}</h6>
            </div>
            {/* imagen */}
            <div class='containerTitle '>
                <img src={image} alt='' class='imgReceta'/>
            </div>
            {/* titulo dietas */}
            <div class='containerTitle'>
                    <p>Tipos de dieta:</p>
            </div>
            {/* mapeo dietas */}
            <div class='containerTitle'>
                <ul>
                    {
                        diets?.map(t => 
                            <li key={t.name}>
                                {t.name}
                            </li>
                        )
                    }
                </ul>                
            </div>
                
            {/* btns Fav y Delete */}
            {
                userStorage.user.role === "admin" ?
                <div class="container">
                    <div class="position-absolute bottom-0 start-0 contBotones">
                        <button class='btn'>
                            <DeleteIcon className="btnEditR" onClick={() => handleElimR(_id)} />
                        </button>                    
                    </div>
                    <div class="position-absolute bottom-0 start-50 translate-middle-x contBotones">
                        <a href={`/detalle/${diaNoche}/${barbie}/${_id}`} class="btn btn-dark btnPasoA">
                            Paso a Paso
                        </a>
                    </div>
                    <div class="position-absolute bottom-0 end-0 contBotones">
                        <a href={`/formEdit/${_id}`}>
                            <button class='btn'>
                                <EditIcon className="btnEditR"/>
                            </button> 
                        </a>                                            
                    </div>               
                </div>
                :
                <div class="container">
                    <div class="position-absolute bottom-0 start-0 contBotones">
                        <button class='btn'>
                            <FavoriteBorderIcon className={favStorage?.find(e => e === _id) ? "cardButtonFav" : "cardButtonK"} onClick={() => handleFav(_id)} />
                        </button>                    
                    </div>
                    <div class="position-absolute bottom-0 start-50 translate-middle-x contBotones">
                    <a href={`/detalle/${diaNoche}/${barbie}/${_id}`} class="btn btn-dark">
                        Paso a Paso
                    </a>
                    </div>
                    <div class="position-absolute bottom-0 end-0 contBotones">
                    <button class='btn'>
                        <ThumbUpIcon className={meG?.find(e => e === _id) ? "cardButtonMG" : "cardButtonK"} onClick={() => handleMG(_id)}/>
                    </button> 
                    </div>               
                </div>
            }
            
        </div>
    )
}

export default CardReceta