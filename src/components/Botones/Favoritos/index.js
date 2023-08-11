import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './estilos.css';

function Favorito({/* _id, fav, handleFav */}) {

    //const buscoID = fav.find(id => id === _id);


    return (
        <button className='cardButton'>
           {/*  <FavoriteBorderIcon className={buscoID ? 'pintaFav' : ''} onClick={handleFav(_id)}/> */}
        </button>
    )
}

export default Favorito