import React from 'react';
import './estilos.css';


function Paginado({paginaActual, totalPag, onChangePag}) {
    console.log("paginaActual: ", paginaActual)
    
    const numPage = [];

    for(let i=1; i <= Math.ceil(totalPag); i++){
        numPage.push(i);
    }
    console.log("numPage: ", numPage.length)
    return (
        <nav className='contGralPaginado'>
            {/*btn Prev */}
            {
                numPage && paginaActual > 1 ?
                <button class="btn btn-secundary" onClick={() => onChangePag(paginaActual - 1)}>Prev</button> : null
            }

            {/* btn Paginas ->num paginas-> 1-2-3 etc*/}
            {
                numPage && numPage.map((num) => {
                    return(
                        <button  class="btn btn-primary" key={num}
                            onClick={() => onChangePag(num)}
                        >
                            {num}
                        </button>
                    )
                })
            }

            {/*btn  Next*/}
            {
                numPage && paginaActual < numPage.length ?
                <button class="btn btn-secundary" onClick={() => onChangePag(paginaActual + 1)}>Next</button> : null
            }
        </nav>
    );
}

export default Paginado