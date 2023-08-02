import React from 'react'
import './estilos.css';
import ListaRecetas from '../ListaRecetas';
import NavBar from '../NavBar';
import Filtros from '../Filtros';


function Home() {

    
    return (
        <div>
            <NavBar/>
            <div class="container-fluid">{/* boostrap divide en 12 columnas */}            
                <div class="row">
                    <div class="col-2 contIzq"> {/* este div abarca 3 de las 12col */}
                        <Filtros/>
                    </div>

                    <div class="container col contMed"> {/* este abarca 9col */}
                        <div class="contTituloColMed">
                            <h2>Aquí vas a encontrar las mejores recetas y soluciones para tus comidas</h2>
                        </div>
                        <div>
                            <ListaRecetas/>
                        </div>                        
                    </div>
                    
                    <div class="col-2 contDer"> {/* este abarca 1col */}
                        queda sin utilizar
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home