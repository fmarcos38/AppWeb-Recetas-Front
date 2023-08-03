import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filtrar } from '../../redux/actions';

function Filtros() {

    const tiposDietas = useSelector(state => state.TiposDietas);
    const [dieta, setDieta] = useState({dieta: ""});
    const dispatch = useDispatch();

    const handleChecked = (e) => {
        console.log("dieta:", e.target.value)
        
        setDieta(e.target.value);      
    };
    const handleSubmit = (e) => {
        if(dieta){
            console.log("dietaSUB:", dieta)
            dispatch(filtrar(dieta.dieta));
            //setDieta("");
        }else{
            alert("No seleccionaste ningún filtro!!");
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
                            <input type='checkbox' id={d.tipo} value={d.tipo} onChange={handleChecked}/>
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