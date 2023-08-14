import React, { useState } from 'react';
import './estilos.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import swal from 'sweetalert';
import userLog from '../../localStorage';
import { useDispatch, useSelector } from 'react-redux';
import { agregaFav, eliminaFav } from '../../redux/actions';

function CardReceta({_id, title, image, diets, diaNoche, barbie}) {
    
/*---Favoritos---------------------------------------*/  
    const userStorage = userLog.getUserActual;
    const userReducer = useSelector(state => state.user);
    const [favStorage, setFavStorage] = useState(userReducer.favorites); 
    const dispatch = useDispatch();

    const handleFav = (_id) => {  
    
        if(!userStorage){
            swal({
            title: "Debes estar Registrado para poder agregar a Fav",
            icon: "error",
            button: "Aceptar",
        });
            //navigate("/registrarse");            
        }else{  
            if (!favStorage.find(e => e === _id)) {//si el producto NO esta en fav del localStor
                dispatch(agregaFav(userStorage.user.email,_id)); 
                //asigno a state el erray de fav q está en el localStor
                let state = userStorage.user.favorites;
                state.push(_id);//carga array
                //guarda el nuevo array en fav del localStor
                //localStorage.setItem('user.favorites', favStorage);
                setFavStorage(state);  //actualizo estado    
                swal({
                title: "Producto Añadido",
                text: `agregado a Favoritos`,
                icon: "success",
                button: "Aceptar",
                });        
            }
            if (favStorage.find(e => e === _id)){            
                dispatch(eliminaFav(userStorage.user.email,_id)); //borro de la DB
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
    };


    return (
        <div class="container-fluid position-relative contCard">
            
            <div class='containerTitle'>
                <h6>{title}</h6>
            </div>

            <div class='containerTitle '>
                <img src={image} alt='' class='imgReceta'/>
            </div>
            
            <div class='containerTitle'>
                    <p>Tipos de dieta:</p>
            </div>
            
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
            <div class="container">
                <div class="position-absolute bottom-0 start-0 contBotones">
                <FavoriteBorderIcon className={favStorage?.find(e => e === _id) ? "cardButtonFav" : "cardButton"} onClick={() => handleFav(_id)} />
                </div>
                <div class="position-absolute bottom-0 start-50 translate-middle-x contBotones">
                    <a href={`/detalle/${diaNoche}/${barbie}/${_id}`} class="btn btn-dark">
                        Paso a Paso
                    </a>
                </div>
                <div class="position-absolute bottom-0 end-0 contBotones">
                    
                </div>               
            </div>
        </div>
    )
}

export default CardReceta