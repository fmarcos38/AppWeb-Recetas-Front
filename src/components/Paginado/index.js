import React from 'react';
import './estilos.css';


function Paginado({paginaActual, totalPag, onChangePag, barbie}) {
    
    const numPage = [];

    for(let i=1; i <= Math.ceil(totalPag); i++){
        numPage.push(i);
    }
    
    
    return (
        <nav className='contGralPaginado'>
            {/*btn Prev */}
            {
                numPage && paginaActual > 1 ?
                <button class="btn btn-success" onClick={() => onChangePag(paginaActual - 1)}>Prev</button> : null
            }

            {/* btn Paginas ->num paginas-> 1-2-3 etc*/}
            {
                numPage && numPage.map((num) => {
                    return(
                        <button  className={barbie ? "btn btn-info btnKen" : "barbieBtn"} key={num}
                            onClick={() => onChangePag(num)}
                        >
                            <span className={paginaActual === num ? 'num' : ''}>{num}</span>
                        </button>
                    )
                })
            }

            {/*btn  Next*/}
            {
                numPage && paginaActual < numPage.length ?
                <button class="btn btn-success btnNext" onClick={() => onChangePag(paginaActual + 1)}>Next</button> : null
            }
        </nav>
    );
}

export default Paginado