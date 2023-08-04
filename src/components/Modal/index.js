import React from 'react'
import ListaDietas from '../circular/ListaDietas/listaDietas'

function Modal({diets}) {
    return (
        <div class="modal fade modal-lg modal1" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Dietas en la que se puede incluir estra receta</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <ListaDietas dietas={diets}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal