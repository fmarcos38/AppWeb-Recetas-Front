import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import "./estilos.css";
import Swal from "sweetalert2";
import userLog from '../../localStorage';
import { editaReceta, getRecetaById, resetDetalle } from '../../redux/actions';
import { useParams } from 'react-router-dom';

function FormEdit() {
    
    const userStorage = userLog.getUserActual();     

    const { _id } = useParams();
    const recetaD = useSelector(state => state.detalleReceta);
    const dispatch = useDispatch();

    const initialState = {
        title: "",
        image: null,
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
    const [vistaPrevia, setVistaPrevia] = useState(recetaD.image);//vista previa
    const tiposDietas = useSelector(state => state.TiposDietas);
    //estado y contador d paso a paso
    const [paso, setPaso] = useState("");
    const [contadorP, setContadorP] = useState(1);
    //estado y contador de Ingredientes
    const [ingrediente, setIngrediente] = useState("");
    const [ingredientes, setIngredientes] = useState([]);
    const [contadorPIng, setContadorIng] = useState(1);

    useEffect(() => {
        dispatch(getRecetaById(_id));
        
        return () => {
            dispatch(resetDetalle());
        }
    }, [_id, dispatch]);


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
    //btn Sgt
    const onClickBtnSgt = () => {
        setGrupo(grupo + 1);   
    };
    //btn atras
    const onClickBtnAtras = () => {
        if(grupo === 1){
            return
        }else{
            setGrupo(grupo - 1);
        }
    };    
    //elim dieta
    const handlerDeleteDieta = (dieta) => {
        setReceta({...receta, diets: receta.diets.filter(d => d !== dieta)})
    };    
     //ingredientes  
    const handleClickIngrediente = (e) => {
        e.preventDefault();
        setIngredientes([...ingredientes, {name: ingrediente}]);
        setContadorIng(contadorPIng + 1);
    };
    //para paso a paso
    const handleClickPaso = (e) => {   
        e.preventDefault();            
        setReceta({...receta, analyzedInstructions: [...receta.analyzedInstructions,
            {
                number: contadorP,
                step: paso,
                ingredients: ingredientes  
            }]
        });
        
        setContadorP(contadorP + 1);
        setIngrediente("");
        document.getElementById("ingrediente").value = "";
        setIngredientes([]);
        setContadorIng(1);
    }; 
    const handleDeletePaso = (paso) => {
        setReceta({...receta, analyzedInstructions: receta.analyzedInstructions.filter(p => p.step !== paso.step)})
        setContadorP(contadorP -1);
    };
     //elim ingrediente
    const handlerDeleteIng = (ingre,i) => {
        setIngrediente({...receta, analyzedInstructions: receta.analyzedInstructions[i].ingredients.filter(ing => ing.name !== ingre.name)});
    };

    const handleSubModif = async (e) => {
        e.preventDefault();
        const newErrors = {...errors}; //array errores
        //errores        
        if(!recetaD.title){
            newErrors.title = "Ingrese titulo";
        }
        if(!recetaD.diets[0]){
            newErrors.diets = "Ing un tipo de dieta";
        }
        if(!recetaD.analyzedInstructions[0]){
            newErrors.analyzedInstructions = "Ing un tipo de dieta";
        }
        //actualizo errores
        setErrors(newErrors);
        if(!recetaD.title || !recetaD.diets[0] || !recetaD.analyzedInstructions[0]){
            Swal.fire({
                position: 'top-center',
                icon: 'error',
                title: 'Faltan datos verifique!!',
                showConfirmButton: false,
                timer: 2000
            });
        }else{
            try {
                let formData = new FormData();
                formData.append("title", recetaD.title);
                formData.append('image', recetaD.image);
                formData.append("diets",JSON.stringify(recetaD.diets));
                formData.append("analyzedInstructions", JSON.stringify(recetaD.analyzedInstructions));

                await fetch(`http://localhost:8000/recetas/createR`, {
                    method: "POST",
                    body: formData,
                });
                    Swal.fire({
                        icon: 'success',
                        title: 'Creado correctamente!!',
                        showConfirmButton: false,
                        timer: 2000
                    });
                    setReceta(initialState);
                    setGrupo(1);
                
            } catch (error) {
                console.log(error);
            }
        }        
    };
    return (
        <div>
        {
            userStorage.user.role !== "admin" ?
            <>
                <span>No tiene los permisos necesarios</span>
            </>
            :
            <div class="contGralCR">     
            <form class="container contForm" onSubmit={handleSubModif}>
                <h3 class="tituloReceta">Modificar Receta existente:</h3>
                {/* Grupo 1 */}
                {
                    grupo === 1 &&
                    <div class='container-fluid grupo1'>                        
                        {/* titulo */}
                        <div class="contInputLabel">
                            <label class="form-label labelCR">Titulo actual: {recetaD.title}</label>
                            <label class="form-label labelCR">Nuevo Titulo:</label>
                            <input type="text" id="title" value={receta.title} onChange={handleCH} class="form-control inputCR"/>
                            {!receta.title && <span className="error-message">{errors.title}</span>}
                        </div>
                        {/* image */} 
                        <div class="contInputLabel">                            
                            <label class="form-label labelCR">Imagen del prod: </label>
                            <input  type="file" accept="image/*" id="image" onChange={handleCH} class="form-control inputCR"/>
                            {!receta.image && <span className="error-message">{errors.image}</span>}
                        </div>
                        {/* muestra img previa */}
                        <div>
                            <label class="form-label labelCR">Imagen actual: </label> <br/>
                            <img src={recetaD.image} alt="Sin cargar" className={"imgPre"}/>
                            <img src={vistaPrevia} alt="Sin cargar" className={"imgPre"}/>
                        </div>
                        <div class="contBotones">
                            <a href='/home' class="btn btn-dark btnSgt">Go Home</a>
                            
                            <button class="btn btn-dark btnSgt" onClick={onClickBtnSgt}>Siguiente</button>
                        </div>
                    </div>
                }

                {/* Grupo 2 */}
                {/* dietas */}
                {
                    grupo === 2 &&
                    <div class='container-fluid grupo2'>
                        {/* muestra los types actuales*/}
                        <div class="contInputLabel">
                            <label class="form-label labelTiposD">Tipos de Dietas actuales:</label>
                                {
                                    recetaD.diets?.map((dieta, index) => {
                                        return (
                                            <ul key={index} class="row">
                                                <li className="tipoDietaA">{dieta.name}</li>                                                
                                            </ul>
                                        );
                                    })
                                }
                        </div>
                        {/* dietas */}
                        <div class="selectDietas">
                            <label class="form-label labelCR">Ingresar los tipos de Dietas:</label>
                            <select class="form-select " onChange={handleCH} id='diets'>
                                <option>Dietas</option>
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
                            {!receta.diets[0] && <span className="error-message">{errors.diets}</span>}
                        </div>
                        {/* muestra los types seleccionads*/}
                        <div class="contInputLabel">
                                <label class="form-label labelTiposD">Tipos de Dietas agregadas:</label>
                                    {
                                            
                                        receta.diets.map((dieta, index) => {
                                            return (
                                                <div key={index} class="row">
                                                    <div class="col-1 contBtnElimDieta">
                                                        <button type="button" class="btn btn-danger btnElimDieta" onClick={() => handlerDeleteDieta(dieta)}>X</button>
                                                    </div>
                                                    <div class="col">
                                                        <span className="tipoDieta">{dieta}</span>
                                                    </div>
                                                </div>
                                            );
                                        }) 
                                            
                                    }
                        </div>
                        {/* botones */}
                        <div class="contBotones2">
                            <button class="btn btn-dark btnSgt2" onClick={onClickBtnAtras}>Atrás</button> 
                            <button class="btn btn-dark btnSgt2" onClick={onClickBtnSgt}>Siguiente</button>
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
                        <div class="contIng">
                            <label class="form-label labelCR">Ingrediente {contadorPIng} para el paso {contadorP}</label>
                            <input type="text" id="ingrediente" value={ingrediente.name} class="form-control" onChange={handleCH}/>
                            {!receta.analyzedInstructions[0] && <span className="error-message">{errors.analyzedInstructions}</span>}
                            <button onClick={handleClickIngrediente} class="btn btn-dark cargaIng">Cargar Ingrediente n° {contadorPIng}</button>
                        </div>
                        {/* muestra los ing cargados */}
                        {
                            ingredientes?.map(ing => {
                                return(
                                    <div class="row">
                                        <div class= "col">
                                            <p>{ing.name}</p>
                                        </div>
                                        <div class= "col">
                                            <button type="button" class="btn btn-danger btnElim" onClick={() => handlerDeleteIng(ing)}>X</button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        {/* carga paso */}
                        <div className=''>
                            <label for="exampleFormControlInput1" class="form-label labelCR">Descripción Paso {contadorP}</label>
                            <input type="text" id="paso" value={paso} class="form-control" onChange={handleCH}/>
                            {!receta.analyzedInstructions[0] && <span className="error-message">{errors.analyzedInstructions}</span>}
                        </div>
                        {/* btn cargaPaso */}
                        <div>
                            <button onClick={handleClickPaso} class="btn btn-dark cargaIng">Cargar Paso n° {contadorP}</button>
                        </div>
                        {/* muestra el paso cargado */}
                        <div>
                            <label for="exampleFormControlInput1" class="form-label labelCR">Pasos:</label>
                            {
                                receta.analyzedInstructions?.map((paso,i) => {
                                    return(
                                        <div>
                                            {
                                                !paso ?
                                                <span>No step</span>
                                                :
                                                <>
                                                    <div class="row">
                                                        <div class="col-9">
                                                        <p>{paso.number}-{paso.step}</p>
                                                        </div>
                                                        <div class="col">
                                                            <button type="button" class="btn btn-danger btnElim" onClick={() => handleDeletePaso(paso)}>X</button>
                                                        </div>                                                        
                                                    </div>
                                                    <span>Ingredientes del paso {contadorP -1}</span>    
                                                    {
                                                        paso.ingredients?.map((ing) =>{
                                                            return(
                                                                <div class="row">
                                                                    <div class= "col-9">
                                                                        <p>{ing.name}</p>
                                                                    </div>
                                                                    <div class= "col">
                                                                        <button type="button" class="btn btn-danger btnElim" onClick={() => handlerDeleteIng(ing, i)}>X</button>
                                                                    </div>
                                                                </div>
                                                            )
                                                        }
                                                        )
                                                    }
                                                </>                                                                                        
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>      

                        {/* btn crea */}
                        <div class="tituloP btnCreateR">
                            <button onClick={onClickBtnAtras} class="btn btn-dark ">Atrás</button>
                            <button class="btn btn-primary " type='submit' >Modificar Recipe</button>
                        </div>
                    </div>

                    
                    </div>
                }
            </form>
            </div>
        }
        </div>
    )
}

export default FormEdit