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
            title: "Garlicky Kale",
            image: "https://spoonacular.com/recipeImages/644387-312x231.jpg"
        },
    ];
    
    
    return (
        <div class="container contRecetaMuestra">
            {
                listaMuestra?.map(r => 
                    {
                    return(                        
                        <div key={r._id} class="container cardMuestra">
                            <img src={r.image} class="card-img-top imgCard" alt="..."/>
                            <div class="card-body ">
                                <h6 class="card-title titleCardMuestra">{r.title}</h6>                                
                            </div>
                        </div>

                    )
                })
            }
        </div>
    )
}

export default ListaRecetasMuestra