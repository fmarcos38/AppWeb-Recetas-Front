import React, {useEffect, useState} from 'react';
import './estilos.css'; 
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import swal from 'sweetalert';

const CardBarbie = ({ _id, title, image, diets, diaNoche, barbie, arrF }) => {

    /*---Favoritos---------------------------------------*/  
    
    const [fav, setFav] = useState([]); console.log("favS:", arrF)
    
    const handleFav = (_id) => {
        
            if(!arrF?.favorites.find(id => id === _id)){
                //si el id NO esta en favoritos, lo qgrego
                //dispatch(agregaFav(userStorage.email, _id));
                setFav([...fav, _id]);
                localStorage.setItem('user.favorites', fav);
                swal({
                    title: "Producto Añadido",
                    text: `agregado a Favoritos`,
                    icon: "success",
                    button: "Aceptar",
                });
            }else{
                //dispatch(eliminaFav(userStorage.email,_id));
                let arrTemp = arrF.favorites.filter(id => id !== _id);
                //guardo en el storage
                localStorage.setItem('user.favorites', arrTemp);
                setFav()
            }
        
    };

    /* useEffect(() => {
        setFav(arrF)
    }, [arrF]); */
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

            {/* btns Fav y Delete */}
            <div class="container">
                <div class="position-absolute bottom-0 start-0 contBotones">
                <FavoriteBorderIcon className={arrF.find(e => e._id === _id) ? "cardButtonFav" : "cardButton"} onClick={() => handleFav(_id)} />
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