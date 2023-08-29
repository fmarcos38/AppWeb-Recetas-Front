import React from 'react';
import "./estilos.css";
function ListaRecetasMuestra() {    

    const listaMuestra = [
        {
            title:"Berry Banana Breakfast Smoothie",
            image:"https://spoonacular.com/recipeImages/715497-312x231.jpg"
        },
        {
            title: "Broccoli and Chickpea Rice Salad",
            image: "https://spoonacular.com/recipeImages/794349-312x231.jpg"
        },
        {
            title: "Slow Cooker: Pork and Garbanzo Beans",
            image: "https://spoonacular.com/recipeImages/660306-312x231.jpg"
        },
        {
            title: "Red Lentil Soup with Chicken and Turnips",
            image: "https://spoonacular.com/recipeImages/715415-312x231.jpg"
        },
    ];
    
    
    return (
        <div class="container-fluid contListareceta">
            {
                listaMuestra.map(r => {
                    return(
                        <div key={r.id} className="container-fluid cardReceta">
                            <img src={r.image} class="card-img-top imgRecetaMuestra" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title tituloRM">{r.title}</h5>                                
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ListaRecetasMuestra