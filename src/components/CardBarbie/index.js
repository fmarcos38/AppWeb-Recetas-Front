import React, { useState } from 'react';
import './estilos.css'; 
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import swal from 'sweetalert';
import userLog from '../../localStorage';
import { useDispatch, useSelector } from 'react-redux';
import { agregaFav, meGusta } from '../../redux/actions';

const CardBarbie = ({ _id, title, image, diets, diaNoche, barbie }) => {

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
    
    return (
        <div class="container-fluid position-relative contGralRB">
            {/* Titulo */}
            <div class="containerTitle">
                <h6 >{title}</h6>
            </div>
            {/* img */}
            <div class="containerTitle">
                <img src={image} class="imagen" alt="..."/>
            </div>
            {/*dietas */}
            <div>
                <p >Dietas en la que se puede incluir la receta:</p>
            
                <ul>
                    {
                        diets?.map(d => <li key={d.name}>{d.name}</li>)
                    }
                </ul>
                
            </div>

            {/* btns Fav y megusta */}
            <div class="container">
                <div class="position-absolute bottom-0 start-0 contBotones">
                    <button class='btn'>
                        <FavoriteBorderIcon className={favStorage?.find(e => e === _id) ? "cardButtonFav" : "cardButton"} onClick={() => handleFav(_id)} />
                    </button>                    
                </div>
                <div class="position-absolute bottom-0 start-50 translate-middle-x contBotones">
                    <a href={`/detalle/${diaNoche}/${barbie}/${_id}`} class="btn btn-dark">
                        Paso a Paso
                    </a>
                </div>
                <div class="position-absolute bottom-0 end-0 contBotones">
                    <button class='btn'>
                        <ThumbUpIcon className={meG?.find(e => e === _id) ? "cardButtonMG" : "cardButton"} onClick={() => handleMG(_id)}/>
                    </button>                     
                </div>               
            </div>

        </div>

    );
};

export default CardBarbie;



/*


<div class="position-absolute bottom-0 start-0">
                    
            

                <div class="position-absolute bottom-0 end-50">
                    
                </div>
                
                <div class="">
                    
                </div>

*/