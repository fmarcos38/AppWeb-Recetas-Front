import React from 'react'
import "./estilos.css";


function ListaAlimentos() {

    const arrayAlimentos = [
        {
            title: 'Curcuma',
            description: "Milagrosa. Dicen las buenas y entendidas lenguas que la nueva estrella de los especieros es, sin temor a exagerar, milagrosa. No solo tiñe de dorado y sazona los platos que toca, sino que es uno de los caballitos de batalla más poderosos y multitasking de la medicina ayurvédica",
            contenido: "Desde el punto de vista nutricional, el oro en polvo de India es un aliado de la salud. El componente más importante de la raíz se llama curcumina, y a ella le debemos los superpoderes que la catapultaron al estrellato: es un activo antiinflamatorio, antioxidante, antiséptico, antitumoral y antibacterial. Mejora la digestión, cuida la salud del hígado, favorece la circulación de la sangre, disminuye el colesterol malo (LDL) y estimula el sistema inmunológico. ¿Algo más? Sí, es muy utilizada para tratar enfermedades más graves como diabetes, trastornos cardiovasculares, Alzheimer, depresión y obesidad. Bajado a tierra, la cúrcuma es un potente analgésico natural para los dolores de cabeza, óseos, de garganta, menstruales y articulares. Cuida la salud bucal, ayuda a eliminar las bacterias del organismo y a mejorar los estados gripales y de las vías respiratorias. A nivel tópico, es muy usada en el cuidado de la piel porque cicatriza, evita infecciones de las heridas y el desarrollo de hongos y tiene buen efecto sobre el acné.",
            image: "https://bucket.somosohlala.com.ar/s3fs-public/styles/internal_990/public/2023-08/gettyimages-1317343720.jpg.webp?itok=HeJciX9J"
        },
        {
            title: 'Lengumbres',
            description: "las legumbres son ricas en fibra lo cual mantiene en mejor forma la salud de nuestro sistema digestivo, y reduce los riesgos de sufrir enfermedades cardiovasculares. Son bajas en contenido graso y no tienen colesterol y por ello contribuyen a la prevención de enfermedades cardiovasculares",
            contenido: "Otra característica es que pueden ser almacenadas en lugares frescos y secos durante períodos prolongados, para ser consumidas a lo largo del año, con la alternativa de frisarlas ya cocidas. Asimismo, son una muy rica fuente de hierro ayudando a prevenir problemas de anemia, y una manera de ayudar a la absorción del hierro por las paredes del intestino, es acompañarlas en la misma comida con alimentos ricos en vitamina C como por ejemplo el tomate, el ají morrón, cítricos como el limón, la naranja o el kiwi que también es rico en la referida vitamina. Otro elemento que brindan las legumbres es el potasio, que favorece el buen funcionamiento del corazón, los músculos y del sistema digestivo",
            image: "https://i.blogs.es/23a158/legumbres/840_560.jpg"
        },
        {
            title: 'Kale',
            description: ""
        },
        {
            title: 'Limón',
            description: ""
        },
        {
            title: 'Jengibre',
            description: ""
        },
        {
            title: 'Palta',
            description: ""
        },
    ];


    return (
        <div class="container contListaAlimentos">
            {
                arrayAlimentos.map(r => {
                    return(
                        <div class="card cardAlimento" >
                            <img src={r.image} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">{r.title}</h5>
                                <p class="card-text">{r.description}</p>
                                <a href="#" class="btn btn-primary">Go more</a>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default ListaAlimentos