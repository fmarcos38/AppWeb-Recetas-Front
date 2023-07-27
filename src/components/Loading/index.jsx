import React from "react";
import './Loading.css';
import loading from './gif.gif';

export default function Loading(){

    return(
        <div class="container col contLoading">
          <div class="container col "> {/* este abarca 9col */}
                <div class="contTituloImg">
                    <h2>Buscando Recetas...</h2>
                </div>
                <div class="contTituloImg">
                    <img src={loading} alt="not found" class="gif"/>
                </div>                        
            </div>          
        </div>
    )
}