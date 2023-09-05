import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import HelpIcon from '@mui/icons-material/Help';
import "./estilos.css";

function CreateR() {

    const initialState = {
        title: "",
        image: "",
        diets: [],
        analyzedInstructions: []
    };
    
    const [receta, setReceta] = useState(initialState);
    const [errors, setErrors] = useState(initialState);
    //estado pre imagen
    const [vistaPrevia, setVistaPrevia] = useState('');//vista previa
    const tiposDietas = useSelector(state => state.TiposDietas);
    //estado y contador d paso a paso
    const [paso, setPaso] = useState("");
    const [contadorP, setContadorP] = useState(1);
    //estado y contador de Ingredientes
    const [ingrediente, setIngrediente] = useState("");
    const [ingredientes, setIngredientes] = useState([]);
    const [contadorPIng, setContadorIng] = useState(1);
    //funcion para manipulación de la pre-imagen
    const previewFile = (file) => {
        const reader = new FileReader();//lector de archivo
        reader.readAsDataURL(file);//convierte la img en una url
        reader.onloadend = () => {
            setVistaPrevia(reader.result);
        };
    };
    
    const handleCH = (e) => {
        if(e.target.id === 'image'){
            setReceta({...receta, image: e.target.files[0]});
            previewFile(e.target.files[0]);//invoco la funcio q muestra la pre-imagen
        }else if(e.target.id === 'diets'){
            //busca si ya existe esa dieta
            let dieta = receta.diets.find(d => d.tipo === e.target.value);
            if(dieta){alert("Ya se ingresó ese type")}
            else{setReceta({...receta, diets: [...receta.diets, e.target.value]})}
        }else if(e.target.id === 'paso'){
            setPaso(e.target.value);
        }else if(e.target.id === 'ingrediente'){
            setIngrediente(e.target.value);
        }else{
            setReceta({...receta, [e.target.id]:e.target.value});
        }
    };
    //ingredientes  
    const handleClickIngrediente = (e) => {
        setIngredientes([...ingredientes, {name: ingrediente}]);
        console.log("Ing:", ingrediente);
        console.log("Ings:", ingredientes);
        setContadorIng(contadorPIng + 1);
    };
    //para paso a paso
    const handleClickPaso = (e) => {               
        setReceta({...receta, analyzedInstructions: [...receta.analyzedInstructions,
            {
                number: contadorP,
                step: paso,
                ingredients: ingredientes  
            }]
        });
        
        setContadorP(contadorP + 1);
    }; 
    console.log("receta:", receta);
    
    
    //elim dieta
    const handlerDelete = (dieta) => {
        setReceta({...receta, diets: receta.diets.filter(d => d !== dieta)})
    };
    //elim paso a paso
    //elim ingrediente
    const handleSub = (e) => {
        e.preventDefault();
        const newErrors = {...errors}; //array errores
        //errores
        if(!receta.title){
            newErrors.title = "Ingrese titulo";
        }
        if(!receta.image){
            newErrors.image = "Carge una img";
        }
        if(!receta.diets[0]){
            newErrors.diets = "Ing un tipo de dieta";
        }
        if(!receta.analyzedInstructions[0]){
            newErrors.analyzedInstructions = "Ing un tipo de dieta";
        }
        //actualizo errores
        setErrors(newErrors);
        try{
            let formData = new FormData();            
            formData.append("title", receta.title);
            formData.append("image", receta.image);//este nombre "imagen" es el q va en upload.single("imagen") en el back
            formData.append("diets", receta.diets);
            formData.append("analyzedInstructions", receta.analyzedInstructions);

            fetch(`http://localhost:3001/products/create`, {
                method: "POST",
                body: formData,
            });
        }catch (error) {
            console.log(error);
        }
    };


    return (
        <div class="container-fluid">
            <form class="container login" onSubmit={handleSub}>
                <div class="contTituloP">
                    <h3 class="tituloP">Crea Receta</h3>
                </div>
                {/* titulo */}
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Titulo receta</label>
                    <input type="text" id="title" value={receta.title} class="form-control" onChange={handleCH}/>
                    {errors.title && <span className="error-message">{errors.title}</span>}
                </div>

                {/* image */} 
                <div>
                    <label cclass="form-label">Imagen del prod: </label>
                    <input class="form-control" type="file" accept="imagen/*" id="image" onChange={handleCH}/>
                </div>
                {/* muestra img previa */}
                <div>
                    <img src={vistaPrevia} alt="Sin cargar" className={"imgPre"}/>
                </div>

                {/* dietas */}
                <div>
                    <label>Tipos de Dietas</label>
                    <select className='' onChange={handleCH} id='diets'>
                    {
                        tiposDietas.map(d => {
                        return(
                            <option key={d._id} value={d.tipo} class="form-check">
                                {d.tipo}
                            </option>
                        )                
                        })
                    }
                    </select>
                
                    {/* muestra los types seleccionads*/}
                    <div >
                    <label>Tipos de Dietas agregadas:</label>
                        {
                                
                            receta.diets.map((dieta, index) => {
                                return (
                                    <div key={index} >
                                        <button type="button" className="btn-delete" onClick={() => handlerDelete(dieta)}>x</button>
                                        <span className="nameType">{dieta}</span>
                                    </div>
                                );
                            }) 
                                
                        }
                    </div>
                </div>

                {/* Paso a Paso */}
                <div className='paso'>                 
                    {/* ingredientes x paso */}
                    <div>
                        <label class="form-label">Ingrediente {contadorPIng} para el paso {contadorP}</label>
                        <input type="text" id="ingrediente" value={ingrediente} class="form-control" onChange={handleCH}/>
                        <button onClick={handleClickIngrediente}>Cargar Ingrediente n° {contadorPIng}</button>
                    </div>
                    {/* muestra los ing cargados */}
                    {
                        ingredientes?.map(ing => {
                            return(
                                <div>
                                    {
                                        <p>{ing.name}</p>
                                    }
                                </div>
                            )
                        })
                    }
                    <div className=''>
                        <label for="exampleFormControlInput1" class="form-label">Descripción Paso {contadorP}</label>
                        <input type="text" id="paso" value={paso} class="form-control" onChange={handleCH}/>
                        {errors.analyzedInstructions && <span className="error-message">{errors.analyzedInstructions}</span>}
                    </div>
                    {/* btn cargaPaso */}
                    <div>
                        <button onClick={handleClickPaso}>Cargar Paso n° {contadorP}</button>
                    </div>
                    {/* muestra el paso cargado */}
                    <div>
                        <label for="exampleFormControlInput1" class="form-label">Pasos:</label>
                        {
                            receta.analyzedInstructions?.map(paso => {
                                return(
                                    <div>
                                        {
                                            !paso ?
                                            <span>No step</span>
                                            :
                                            <>
                                                <p>{paso.number}-{paso.step}</p>
                                            {
                                                paso.ingredients?.map(ing => <p>{ing.name}</p>)
                                            }
                                            </>                                                                                        
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>                                       
                </div>

                {/* btn sub */}
                <div class="tituloP btnCreateR">
                    <button class="btn btn-primary btnLogin" onClick={handleClickPaso}>Create Recipe</button>
                </div>            
            </form>
        </div>
    )
}

export default CreateR