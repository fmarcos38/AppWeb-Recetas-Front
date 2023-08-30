import { GET_RECETAS, GET_RECETA_BY_ID, GET_USER, LOAD, RESET_DETALLE, RESET_FILTRO, RESET_USER } from "../actions/actionsType";

const initialState = {
    allRecetas: [],
    TiposDietas: [
        {
            _id:1,
            tipo: "gluten free",
            descripcion: "Eliminar el gluten significa evitar el trigo, la cebada, el centeno y otros cereales que contienen gluten y los alimentos elaborados con ellos (o que pueden haber sido contaminados de forma cruzada)"
        },
        {
            _id:2,
            tipo: "ketogenic",
            descripcion: "La dieta cetogénica se basa más en la proporción de grasas, proteínas y carbohidratos en la dieta que en ingredientes específicos. En términos generales, los alimentos ricos en grasas y proteínas son aceptables y los alimentos ricos en carbohidratos no lo son. La fórmula que utilizamos tiene un contenido de grasa del 55-80 %, un contenido de proteína del 15-35 % y menos del 10 % de carbohidratos"
        },
        {
            _id:3,
            tipo: "vegetarian",
            descripcion: "Ningún ingrediente puede contener carne o subproductos cárnicos, como huesos o gelatina."
        },
        {
            _id:5,
            tipo: "lacto ovo veg",
            descripcion: "Todos los ingredientes deben ser vegetarianos y ninguno de los ingredientes puede ser o contener lácteos."
        },
        {
            _id:6,
            tipo: "vegan",
            descripcion: "Ningún ingrediente puede contener carne o subproductos cárnicos, como huesos o gelatina, ni puede contener huevos, lácteos o miel."
        },
        {
            _id:7,
            tipo:"paleolithic",
            descripcion: "Los ingredientes permitidos incluyen carne (especialmente alimentada con pasto), pescado, huevos, verduras, algunos aceites (por ejemplo, aceite de coco y de oliva) y, en cantidades más pequeñas, frutas, nueces y batatas. También permitimos la miel y el jarabe de arce (populares en los postres Paleo, pero los seguidores estrictos de Paleo pueden no estar de acuerdo). Los ingredientes no permitidos incluyen legumbres (p. ej., frijoles y lentejas), granos, productos lácteos, azúcar refinada y alimentos procesados."
        },
        {
            _id:8,
            tipo:"primal",
            descripcion: "Muy similar a Paleo, excepto que se permiten lácteos: piense en leche cruda y entera, mantequilla, ghee, etc."
        },
        {
            _id:9,
            tipo: "Low FODMAP",
            descripcion:"Una dieta baja en carbohidratos fermentables (FODMAP, por sus siglas en inglés) que son tipos de carbohidratos en los alimentos, puede ayudar a algunas personas con SII a controlar sus síntomas."
        },
    ],  
    detalleReceta: {},
    user: {},
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
        case GET_RECETA_BY_ID: {
            return{
                ...state,
                detalleReceta: action.payload
            }
        }
        case RESET_DETALLE: {
            return{
                ...state,
                detalleReceta: {}
            }
        }
        case RESET_FILTRO: {
            return{
                ...state,
                allRecetas: action.payload
            }
        }
        case GET_USER: {
            return{
                ...state,
                user: action.payload
            }
        }
        case RESET_USER: {
            return {
                ...state,
                user: {}
            }
        }
        default:
            return state;
    };
};




