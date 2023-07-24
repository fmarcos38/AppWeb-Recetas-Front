import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import HelpIcon from '@mui/icons-material/Help';


function CreateR() {

    const initialState = {
        title: "",
        image: "",
        diets: [],
        analyzedInstructions: []
    };

    const [receta, setReceta] = useState(initialState);
    const tiposDietas = useSelector(state => state.TiposDietas);


    return (
        <div>

            <div class="container-fluid">
                <form>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Titulo receta</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" />
                </div>

                <label>Tipos de Dietas</label>
                {/* mapeo tipos de dietas */}
                {
                    tiposDietas.map(d => {
                        return(
                            <div key={d} class="form-check">
                                <input class="form-check-input" type='checkbox' value="" id="dieta1"/>
                                <label class="form-check-label" for="flexCheckDefault">{d.tipo}</label>
                                
                                <abbr title={d.descripcion}>
                                    <HelpIcon/>
                                </abbr>
                                
                            </div>
                        )                
                    })
                }    

                {/*  */}            
                </form>
            </div>
        </div>
    )
}

export default CreateR