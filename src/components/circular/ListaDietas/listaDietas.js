import React from 'react'

function ListaDietas({dietas}) {
    return (
    <div>
        <ul>
        {
            dietas[0] ?
            dietas.map(d => {
                return(
                    <li key={d.name}>{d.name}</li>
                )
            })
            :
            <span>No posee dietas para mostrar</span>
        }
        </ul>        
    </div>
    )
}

export default ListaDietas