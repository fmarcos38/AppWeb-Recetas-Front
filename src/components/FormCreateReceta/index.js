import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import "./estilos.css";
import Swal from "sweetalert2";


function CreateR() {

    const initialState = {
        title: "",
        image: "",
        diets: [],
        analyzedInstructions: []
    };

    //estado grupo de carga
    const [grupo, setGrupo] = useState(1);
    //estado receta
    const [receta, setReceta] = useState(initialState);
    //estado error
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
    const onClickBtnSgt = () => {
        setGrupo(grupo + 1);   
    };
    const onClickBtnAtras = () => {
        if(grupo === 1){
            return
        }else{
            setGrupo(grupo - 1);
        }
    };

    //funcion para manipulación de la pre-imagen
    const previewFile = (file) => {
        const reader = new FileReader();//lector de archivo
        reader.readAsDataURL(file);//convierte la img en una url
        reader.onloadend = () => {
            setVistaPrevia(reader.result);
        };
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
        if(newErrors){
            Swal.fire({
                position: 'top-center',
                icon: 'error',
                title: 'Faltan datos verifique!!',
                showConfirmButton: false,
                timer: 2000
            });
        }
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
        <div class="contGralCR">     
            <form class="container contForm" onSubmit={handleSub}>
                <h3 class="tituloReceta">Crea tu propia Receta</h3>
                {/* Grupo 1 */}
                {
                    grupo === 1 &&
                    <div class='container-fluid grupo1'>                        
                        {/* titulo */}
                        <div class="contInputLabel">
                            <label class="form-label labelCR">Titulo receta</label>
                            <input type="text" id="title" value={receta.title} onChange={handleCH} class="form-control inputCR"/>
                            {errors.title && <span className="error-message">{errors.title}</span>}
                        </div>
                        {/* image */} 
                        <div class="contInputLabel">
                            <label class="form-label labelCR">Imagen del prod: </label>
                            <input  type="file" accept="imagen/*" id="image" onChange={handleCH} class="form-control inputCR"/>
                            {errors.image && <span className="error-message">{errors.image}</span>}
                        </div>
                        {/* muestra img previa */}
                        <div>
                            <img src={vistaPrevia} alt="Sin cargar" className={"imgPre"}/>
                        </div>
                        <div>
                            <button disabled={!errors} class="btn btn-dark btnSgt" onClick={onClickBtnSgt}>Siguiente</button>
                        </div>
                    </div>
                }
                
                {/* Grupo 2 */}
                {
                    grupo === 2 &&
                    <div class='container-fluid grupo1'>
                        {/* dietas */}
                        <div class="contInputLabel">
                                <label class="form-label labelCR">Tipos de Dietas</label>
                                <select class="form-select inputCR" onChange={handleCH} id='diets'>
                                    <option>Menu</option>
                                {
                                    tiposDietas.map(d => {
                                    return(
                                        <option key={d._id} value={d.tipo} class="labelCR">
                                            {d.tipo}
                                        </option>
                                    )                
                                    })
                                }
                                </select>
                                {errors.diets && <span className="error-message">{errors.diets}</span>}
                                {/* muestra los types seleccionads*/}
                                <div class="contInputLabel">
                                <label class="form-label labelCR">Tipos de Dietas agregadas:</label>
                                    {
                                            
                                        receta.diets.map((dieta, index) => {
                                            return (
                                                <div key={index} class="row">
                                                    <div class="col-1 contBtnElimDieta">
                                                        <button type="button" class="btn btn-danger btnElimDieta" onClick={() => handlerDelete(dieta)}>X</button>
                                                    </div>
                                                    <div class="col">
                                                        <span className="tipoDieta">{dieta}</span>
                                                    </div>
                                                </div>
                                            );
                                        }) 
                                            
                                    }
                                </div>
                        </div>
                        <div>
                            <button class="btn btn-dark btnSgt" onClick={onClickBtnAtras}>Atrás</button> 
                            <button class="btn btn-dark btnSgt" onClick={onClickBtnSgt}>Siguiente</button>
                        </div>
                    </div>
                }
                
                {/* grupo 3 */}
                {
                    grupo === 3 &&
                    <div class='container-fluid grupo3'>
                        {/* Paso a Paso */}
                        <div className='paso'>                 
                        {/* ingredientes x paso */}
                        <div>
                            <label class="form-label labelCR">Ingrediente {contadorPIng} para el paso {contadorP}</label>
                            <input type="text" id="ingrediente" value={ingrediente} class="form-control" onChange={handleCH}/>
                            {errors.analyzedInstructions && <span className="error-message">{errors.analyzedInstructions}</span>}
                            <button onClick={handleClickIngrediente} class="btn btn-dark cargaIng">Cargar Ingrediente n° {contadorPIng}</button>
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
                            <label for="exampleFormControlInput1" class="form-label labelCR">Descripción Paso {contadorP}</label>
                            <input type="text" id="paso" value={paso} class="form-control" onChange={handleCH}/>
                            {errors.analyzedInstructions && <span className="error-message">{errors.analyzedInstructions}</span>}
                        </div>
                        {/* btn cargaPaso */}
                        <div>
                            <button onClick={handleClickPaso} class="btn btn-dark cargaIng">Cargar Paso n° {contadorP}</button>
                        </div>
                        {/* muestra el paso cargado */}
                        <div>
                            <label for="exampleFormControlInput1" class="form-label labelCR">Pasos:</label>
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

                    {/* btn crea */}
                    <div class="tituloP btnCreateR">
                        <button onClick={onClickBtnAtras} class="btn btn-dark ">Atrás</button> 
                        <button class="btn btn-primary " onClick={handleClickPaso}>Create Recipe</button>
                    </div>
                </div>
                }
                                                
            </form>
        </div>
    )
}

export default CreateR