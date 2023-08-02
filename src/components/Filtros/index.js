import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filtrar } from '../../redux/actions';

function Filtros() {
    const tiposDietas = useSelector(state => state.TiposDietas);
    const [tipos, setTipos] = useState([]);
    const dispatch = useDispatch();

    const handleChecked = (e) => {
        if(e.target.checked === true){
            setTipos([...tipos, {name:e.target.value}]);
        }else{
            setTipos(tipos.filter(t => t !== e.target.value));
        }    
        console.log("tipos:", tipos)    
    };
    const handleSubmit = (e) => {
        if(tipos[0]){
            console.log("tipos:", tipos)
            dispatch(filtrar(tipos));
        }
    };    

    return (
        <div class="container">
            <h3>Filtros</h3>

            <form onSubmit={handleSubmit}>
            {
                tiposDietas?.map(d => {
                    return(
                        <div key={d._id}>
                            <input type='checkbox' id={d.tipo} value={d.tipo} onClick={handleChecked}/>
                            <label>{d.tipo}</label>
                        </div>
                    )
                })
            }
            <button type='submit'>Filtrar</button>
            </form>
        </div>
    )
}

export default Filtros