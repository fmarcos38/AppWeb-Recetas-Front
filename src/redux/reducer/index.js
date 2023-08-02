import { FILTROS, GET_RECETAS, LOAD } from "../actions/actionsType";

const initialState = {
    allRecetas: [],
    TiposDietas: [
        {
            _id:1,
            tipo: "Sin Gluten",
            descripcion: "Eliminar el gluten significa evitar el trigo, la cebada, el centeno y otros cereales que contienen gluten y los alimentos elaborados con ellos (o que pueden haber sido contaminados de forma cruzada)"
        },
        {
            _id:2,
            tipo: "Cetogénico",
            descripcion: "La dieta cetogénica se basa más en la proporción de grasas, proteínas y carbohidratos en la dieta que en ingredientes específicos. En términos generales, los alimentos ricos en grasas y proteínas son aceptables y los alimentos ricos en carbohidratos no lo son. La fórmula que utilizamos tiene un contenido de grasa del 55-80 %, un contenido de proteína del 15-35 % y menos del 10 % de carbohidratos"
        },
        {
            _id:3,
            tipo: "Vegetariano",
            descripcion: "Ningún ingrediente puede contener carne o subproductos cárnicos, como huesos o gelatina."
        },
        {
            _id:4,
            tipo: "Lacto vegetariana",
            descripcion: "Todos los ingredientes deben ser vegetarianos y ninguno de los ingredientes puede ser o contener huevo."
        },
        {
            _id:5,
            tipo: "Ovo-Vegetariano",
            descripcion: "Todos los ingredientes deben ser vegetarianos y ninguno de los ingredientes puede ser o contener lácteos."
        },
        {
            _id:6,
            tipo: "Vegano",
            descripcion: "Ningún ingrediente puede contener carne o subproductos cárnicos, como huesos o gelatina, ni puede contener huevos, lácteos o miel."
        },
        {
            _id:7,
            tipo:"Paleo",
            descripcion: "Los ingredientes permitidos incluyen carne (especialmente alimentada con pasto), pescado, huevos, verduras, algunos aceites (por ejemplo, aceite de coco y de oliva) y, en cantidades más pequeñas, frutas, nueces y batatas. También permitimos la miel y el jarabe de arce (populares en los postres Paleo, pero los seguidores estrictos de Paleo pueden no estar de acuerdo). Los ingredientes no permitidos incluyen legumbres (p. ej., frijoles y lentejas), granos, productos lácteos, azúcar refinada y alimentos procesados."
        },
        {
            _id:8,
            tipo:"Primitivo",
            descripcion: "Muy similar a Paleo, excepto que se permiten lácteos: piense en leche cruda y entera, mantequilla, ghee, etc."
        },
        {
            _id:9,
            tipo: "FODMAP bajo",
            descripcion:"Una dieta baja en carbohidratos fermentables (FODMAP, por sus siglas en inglés) que son tipos de carbohidratos en los alimentos, puede ayudar a algunas personas con SII a controlar sus síntomas."
        },
    ],  
    recetasFiltradas: [],
    load: true,
};

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case LOAD: {
            return{
                ...state,
                load: true
            }
        }
        case GET_RECETAS:{
            return{
                ...state,
                allRecetas: action.payload,
                load: false
            }
        }
        case FILTROS:{
            return{
                ...state,
                allRecetas: action.payload,
                load:false
            }
        }
        default:
            return state;
    };
};




